import { useFetcher, useOutletContext } from "react-router-dom"
import { useEffect } from "react"

export default function Grade({grade}) {
    const fetcher = useFetcher()
    const {notify} = useOutletContext()
    useEffect(() => {
        if (fetcher.data) {
            notify(fetcher.data.message)
        }
    }, [fetcher.data])
    return (
    <fetcher.Form key={grade.GradeID} method="post" action={"/update-grade/" + grade.GradeID} className="grade">
        <div style={{display:"grid"}}>
        <input type="hidden" value={grade.GradeID}/>
        <p>Assignment Name: {grade.AssignmentName}</p>
        <p>Name: {`${grade.FirstName} ${grade.LastName}`}</p>
        </div>

        <div style={{display:"flex", alignItems:"center"}}>
        <input style={{margin:0}} name="Grade" type="number" defaultValue={grade.Grade} required/>
        <button disabled={fetcher.state === "submitting"} type="submit">{fetcher.state === "submitting" ? "Updating...": "Update Grade"}</button>
        </div>
    </fetcher.Form>
    )
}