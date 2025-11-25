import {useFetcher, useOutletContext} from "react-router-dom"
import { useEffect } from "react"

export default function DeleteButton(props) {
    const fetcher = useFetcher()
    const {notify} = useOutletContext()
    useEffect(() => {
        if (fetcher.data) {
            notify(fetcher.data.message)
        }
    }, [fetcher.data])

    return (
    <fetcher.Form method="post" action={`/${props.urlSegment}/${props.id}`}>
        <button type="submit" onClick={props.click}>{props.selected ? "Deleting...": props.view}</button>
    </fetcher.Form>
    )
}