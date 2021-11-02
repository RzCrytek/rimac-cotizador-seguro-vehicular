import React from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import './Coverages.scss';

import IconLlanta from '../../images/icons/llanta.svg';
import IconChoque from '../../images/icons/choque.svg';
import IconAtropello from '../../images/icons/atropello.svg';

const Coverages = ({ coverages, setCoverages, setMonthlyAmount, exceeded }) => {
  const handleCoverages = (name) => {
    const data = coverages[name];

    setCoverages({
      ...coverages,
      [name]: { ...coverages[name], status: !data.status },
    });

    setMonthlyAmount((prev) =>
      coverages[name].status ? prev - data.amount : prev + data.amount
    );
  };

  return (
    <div id="coverages">
      <h3>Agrega o quita coberturas</h3>

      <div className="header">
        <div className="item active">
          PROTEGE A<br />
          TU AUTO
        </div>
        <div className="item">
          PROTEGE A LOS
          <br />
          QUE TE RODEAN
        </div>
        <div className="item">
          MEJORA TU
          <br />
          PLAN
        </div>
      </div>

      <Accordion className="accordion-box" allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="icon">
                <img src={IconLlanta} alt="Llanta" />
              </div>

              <div className="heading-title">
                <p className="title">Llanta robada</p>

                <div onClick={(e) => e.stopPropagation()}>
                  <button
                    className="option remove-coverage"
                    onClick={() => handleCoverages('tire')}
                  >
                    <i
                      className={`ico ico-${
                        coverages['tire'].status ? 'remove' : 'add'
                      }`}
                    ></i>
                    {coverages['tire'].status ? 'QUITAR' : 'AGREGAR'}
                  </button>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              He salido de casa a las cuatro menos cinco para ir a la academia
              de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
              bici, na llego a la academia que está en el centro del pueblo en
              una plaza medio-grande y dejo donde siempre la bici atada con una
              pitón a un sitio de esos de poner las bicis y mucho más
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        {!exceeded && (
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="icon">
                  <img src={IconChoque} alt="Choque" />
                </div>

                <div className="heading-title">
                  <p className="title">Choque y/o pasarte la luz roja</p>

                  <div onClick={(e) => e.stopPropagation()}>
                    <button
                      className="option add-coverage"
                      onClick={() => handleCoverages('crash')}
                    >
                      <i
                        className={`ico ico-${
                          coverages['crash'].status ? 'remove' : 'add'
                        }`}
                      ></i>
                      {coverages['crash'].status ? 'QUITAR' : 'AGREGAR'}
                    </button>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>

            <AccordionItemPanel>
              <p>
                Lorem Ipsum es simplemente el texto de relleno de las imprentas
                y archivos de texto. Lorem Ipsum ha sido el texto de relleno
                estándar de las industrias desde el año 1500, cuando un impresor
                (N. del T. persona que se dedica a la imprenta) desconocido usó
                una galería de textos y los mezcló de tal manera que logró hacer
                un libro de textos especimen.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        )}

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>
              <div className="icon">
                <img src={IconAtropello} alt="Atropello" />
              </div>

              <div className="heading-title">
                <p className="title">Atropello en la vía Evitamiento</p>

                <div onClick={(e) => e.stopPropagation()}>
                  <button
                    className="option"
                    onClick={() => handleCoverages('hitRun')}
                  >
                    <i
                      className={`ico ico-${
                        coverages['hitRun'].status ? 'remove' : 'add'
                      }`}
                    ></i>
                    {coverages['hitRun'].status ? 'QUITAR' : 'AGREGAR'}
                  </button>
                </div>
              </div>
            </AccordionItemButton>
          </AccordionItemHeading>

          <AccordionItemPanel>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>

      {/* <div className="accordion-box">
        <div className="accordion active">
          <div className="accordion-header">
            <div className="icon">
              <img src={IconLlanta} alt="Llanta" />
            </div>

            <div className="header-title">
              <p className="title">Llanta robada</p>
              <button
                className="option remove-coverage"
                onClick={() => handleCoverages('tire')}
              >
                <i
                  className={`ico ico-${
                    coverages['tire'].status ? 'remove' : 'add'
                  }`}
                ></i>
                {coverages['tire'].status ? 'QUITAR' : 'AGREGAR'}
              </button>
            </div>
          </div>

          <div className="accordion-body">
            <p>
              He salido de casa a las cuatro menos cinco para ir a la academia
              de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi
              bici, na llego a la academia que está en el centro del pueblo en
              una plaza medio-grande y dejo donde siempre la bici atada con una
              pitón a un sitio de esos de poner las bicis y mucho más
            </p>
          </div>
        </div>

        {!exceeded && (
          <div className="accordion">
            <div className="accordion-header">
              <div className="icon">
                <img src={IconChoque} alt="Choque" />
              </div>

              <div className="header-title">
                <p className="title">Choque y/o pasarte la luz roja</p>
                <button
                  className="option add-coverage"
                  onClick={() => handleCoverages('crash')}
                >
                  <i
                    className={`ico ico-${
                      coverages['crash'].status ? 'remove' : 'add'
                    }`}
                  ></i>
                  {coverages['crash'].status ? 'QUITAR' : 'AGREGAR'}
                </button>
              </div>
            </div>

            <div className="accordion-body"></div>
          </div>
        )}

        <div className="accordion">
          <div className="accordion-header">
            <div className="icon">
              <img src={IconAtropello} alt="Atropello" />
            </div>

            <div className="header-title">
              <p className="title">Atropello en la vía Evitamiento </p>
              <button
                className="option"
                onClick={() => handleCoverages('hitRun')}
              >
                <i
                  className={`ico ico-${
                    coverages['hitRun'].status ? 'remove' : 'add'
                  }`}
                ></i>
                {coverages['hitRun'].status ? 'QUITAR' : 'AGREGAR'}
              </button>
            </div>
          </div>

          <div className="accordion-body"></div>
        </div>
      </div> */}
    </div>
  );
};

export default Coverages;
