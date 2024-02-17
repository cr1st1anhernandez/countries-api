import {Card, Link} from '@nextui-org/react'
import {IoMdArrowRoundForward} from 'react-icons/io'

interface ForwardButtonProps {
  href: string
}

export default function ForwardButton({href}:ForwardButtonProps):JSX.Element {
  return (
      <Card className="flex w-full justify-center gap-2" isPressable>
        <Link
          href={href}
          className="flex w-full justify-end gap-2 p-4"
        >
          <p className="text-gray-400">Next</p>
          <IoMdArrowRoundForward className="text-gray-400" />
        </Link>
        </Card>
    )
}
