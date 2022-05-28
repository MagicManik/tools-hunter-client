import { useEffect, useState } from "react"

const useTool = id => {
    const [tool, setTool] = useState({});

    useEffect(() => {
        fetch(`https://agile-fortress-81625.herokuapp.com/tool/${id}`)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [id, tool]);

    return [tool, setTool]
}

export default useTool;