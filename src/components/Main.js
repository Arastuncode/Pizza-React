import Pizza from "./Pizza";

function Main({data}) {
    console.log(data);
    return (
        <main className="py-5">
            <div className="container">
                {data.data.map( p => (
                    <Pizza key={p.id} pizza={p} />
                ) )}
            </div>
        </main>
    )
}

export default Main;