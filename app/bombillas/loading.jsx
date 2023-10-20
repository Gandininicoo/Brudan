import CardLoading from "../../components/card-loading"
export default function Loading (){
    return(
        <>
            <div className="categoryBanner" style={{backgroundImage: `url(../bombillahome.jpg)`}} > <h1>BOMBILLAS</h1> </div>
            <section className="homepageproductsbody"> 
                <CardLoading/>
                <CardLoading/>
                <CardLoading/>
                <CardLoading/>
            </section>
            <section className="homepageproductsbody"> 
                <CardLoading/>
                <CardLoading/>
                <CardLoading/>
                <CardLoading/>
            </section>
        </>
    )
}