'use client'
import React, { useEffect, useState } from 'react'
import {
  DesktopOutlined,
  ApiOutlined,
  InfoCircleOutlined,
  FireOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { ConfigProvider, Menu, Layout } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const DEFAULT_ITEM: MenuItem = {
  key: '',
  icon: undefined,
  children: [],
  label: '',
  type: undefined,
};

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem => {
  return {
    ...DEFAULT_ITEM,
    key,
    icon,
    children,
    label,
    type,
  };
};

const { Sider } = Layout

const items: MenuItem[] = [
  getItem('About', 'sub1', <InfoCircleOutlined />, [
    getItem('Introduction', '1', <FireOutlined />),
    getItem('Showcase', '2', <DesktopOutlined />),
  ]),

  getItem('REST-API', 'sub2', <ApiOutlined />, [getItem('Countries', '3')]),
]

export default function SideNav(): JSX.Element {
  const [collapsed, setCollapsed] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setDarkMode(isDarkMode)

    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const newDarkMode = document.documentElement.classList.contains(
            'dark',
          )
          setDarkMode(newDarkMode)
        }
      }
    })

    observer.observe(document.documentElement, { attributes: true })
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#14b8a6',
            colorBgContainer: '#fff',
          },
          Menu: {
            colorPrimary: '#14b8a6',
            darkItemBg: '#18181B',
            darkPopupBg: '#18181B',
            darkItemHoverBg: '#1f1f23',
            darkSubMenuItemBg: '#18181B',
            subMenuItemBg: '#fff',
          },
          Layout: {
            siderBg: '#18181B',
            lightSiderBg: '#fff',
            triggerBg: '#18181B',
            lightTriggerBg: '#fff',
          },
        },
        token: {
          colorPrimary: '#14b8a6',
          colorBgContainer: '#fff',
          colorBgBase: '#fff',
        },
      }}
    >
      <Layout
        className="hidden rounded-r-xl lg:flex"
        style={{ minHeight: '100vh' }}
      >
        <Sider
          collapsible
          color="#18181B"
          theme={darkMode ? 'dark' : 'light'}
          className="rounded-r-xl"
          collapsed={collapsed}
          onCollapse={(value) => {
            setCollapsed(value)
          }}
        >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme={darkMode ? 'dark' : 'light'}
            className="rounded-r-lg"
            inlineCollapsed={collapsed}
            items={items}
          />
        </Sider>
      </Layout>
    </ConfigProvider>
  )
}
