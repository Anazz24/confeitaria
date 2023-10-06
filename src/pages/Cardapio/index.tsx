import styles from './Cardapio.module.scss'
import Logo from 'assets/logo.svg'
import Buscador from './Buscador';
import React, { useState } from 'react';
import Filtros from './Filtros';

export default function Cardapio(){
  const [buscar, setBusca] = useState("");
    return (
        <main>
            <nav className={ styles.menu }>
            <img src={Logo} alt="Logo do Restaurante"/>
            {/*Cardapio Do Restaurante Mojo Dojo Casa House do Grande Mestre Cuca Senhor Artista Profissional Admiravel Divino Luxuoso Doutor Magíster Especializado Lindo Danado Explêndido Sensacional Charmoso Chef 5 Estrelas Respeitado Raul*/}
            </nav>
            <header className={ styles.header }>
                <div className= { styles.header__text }>
                  "A casa da massa gostosa e saborosa e deliciosa!"
                </div>
            </header>
            <section className={styles.cardapio}>
              <h3 className={styles.cardapio__titulo} >cardapio</h3>
              <Buscador busca={buscar} setBusca={setBusca}/>
              <div className={styles.cardapio__filtros}>
                <Filtros/>
              </div>
            </section>
        </main>
    );
}
