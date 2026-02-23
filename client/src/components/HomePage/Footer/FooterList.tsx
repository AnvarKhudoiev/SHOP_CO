import type { FC } from "react"
type DataT = {
    title: string
    items: string[]
}
interface PropsT {
    data: DataT
}

export const FooterList: FC<PropsT> = ({ data }) => {
    return (
        <ul className="flex flex-col gap-4">
            <li className="font-satoshi font-normal tracking-[2px] uppercase"><h3>{data.title}</h3></li>

            {data.items.map((item) => (
                <li key={item} className="font-satoshi font-normal text-sm text-black/60">
                    {item}
                </li>
            ))}
        </ul>
    )
}