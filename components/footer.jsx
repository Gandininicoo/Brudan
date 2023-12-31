export default function Footer() {
    return (
        <footer>
            <section>
            <a href="/" target="_blank" class="linkimg"><img src="./logos/brudanlogo.png" alt="Mates Brudan"/></a>
            <div class="linkimg"><img src="./logos/elremansolg.png" alt="Regionales El Remanso Logo" class=""/></div>
            </section>
            <section>
            <a href={`https://wa.me/5403444405766?text=Hola me comunico con BruDan para realizar una consulta`} target='_blank' rel="nofollow">
                <span>+54 (3444) 405766</span>
            </a>
            <a class="header--custom-text" itemprop="email" href="mailto:matesbrudan@gmail.com" rel="nofollow">
                <span>matesbrudan@gmail.com</span>
            </a>
            </section>
        </footer>
    )
}