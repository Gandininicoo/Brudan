import CardLoading from "../../components/card-loading"
export default function Loading (){
    return(
        <>
            <div className="categoryBanner" style={{backgroundImage: `url(../matehome.jpg)`}} > <h1>MATES</h1> </div>
            <h3 className="homeTag"> </h3>
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