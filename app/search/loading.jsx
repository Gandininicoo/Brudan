import CardLoading from "../../components/card-loading"
export default function Loading (){
    return(
        <>
            <h3 className="homeTag">Resultados de la busqueda: </h3>
            <section className="homepageproductsbody"> 
                <CardLoading/>
                <CardLoading/>
                <CardLoading/>
                <CardLoading/>
            </section>
            <div className="homeBanner2"></div>
        </>
    )
}