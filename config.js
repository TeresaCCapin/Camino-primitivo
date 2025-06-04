var config = {
    style: 'style.json',
    showMarkers: true,
    markerColor: '#8e7768',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: true, //set true for enabling custom layers from sources.js
    bookmarks: false,
    chapterReturn: false,
    title: 'El Camino Primitivo',
    logo: '',
    subtitle: '«Quien va a Santiago y no al Salvador, visita al criado y no al Señor»',
    byline: '',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Fuentes: <br><a href="https://www.caminodesantiago.gal/es/planifica/las-rutas/camino-primitivo" target="_blank">www.caminodesantiago.gal</a> <br><a href="https//:www.oviedoiniciodelcamino.com/html/caminoprimitivo.html" target="_blank">www.oviedoiniciodelcamino.com</a> <br><a href="https://www.pilgrim.es/" target="_blank">www.pilgrim.es</a><br> Createdo usando <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'Etapa 0',
            alignment: 'center',
            hidden: false,
            title: 'Salida: Oviedo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Cathedral_of_Oviedo_2021_-_exterior.jpg',
            caption: '',
            website: '<a href="https://www.oviedoiniciodelcamino.com/html/caminoprimitivo.html" target="_blank">Oviedo, inicio del camino</a>',
            author: '',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'A comienzos del siglo IX, el Reino de Asturias se consolidaba como bastión cristiano frente al dominio musulmán en la península. Alfonso II, conocido como "el Casto", estableció su corte en Oviedo y promovió la construcción de iglesias y la organización del reino siguiendo el modelo visigodo.',
            location: {
                center: [-5.84399, 43.36244],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Etapas',
                    opacity: 1,
                    duration: 5000
                }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Etapa 1',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 1: Oviedo - Grado',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Grado_01.jpg',
            caption: '',
            description: '<h3>25,2 km</h3>En torno al año 830, se descubrió en Compostela una tumba que se identificó como la del apóstol Santiago. Alfonso II emprendió un viaje desde Oviedo para verificar el hallazgo, convirtiéndose en el primer peregrino a Santiago y estableciendo así el Camino Primitivo.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-1-oviedo-gradosan-juan-de-villapanada/#profileSection" target="_blank">Perfil de etapa</a>',
            location: {
                center: [-6.07062, 43.39092],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 0.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 2',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 2: Grado - Salas ' ,
            image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Torre_Palacio_Doriga_Salas_Asturias_2.JPG',
            description: '<h3>22,1 km</h3>El itinerario seguido por Alfonso II desde Oviedo incluía localidades como Grado, Salas, La Espina, Tineo, Pola de Allande y Grandas de Salime. Esta ruta, conocida como el Camino Primitivo, es considerada la más antigua de las peregrinaciones a Santiago.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-2-gradosan-juan-de-villapanada-salas/" target="_blank">Perfil de etapa</a>',
            location: {
                center: [-6.25894, 43.40835],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 3',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 3: Salas - Tineo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Tineo.JPG',
            description: '<h3>19,8 km</h3>Alfonso II ordenó la construcción de una iglesia en Compostela para custodiar los restos del apóstol y promovió el culto jacobeo, consolidando a Santiago como patrón del reino y fortaleciendo la identidad cristiana del norte peninsular.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-3-salas-tineo/" target="_blank">Perfil de etapa</a>',
            location: {
                center: [ -6.41684, 43.33384],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 4',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 4: Tineo - Pola de Allande',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/94/C%C3%A1mara_santa_de_Oviedo_Lateral_A.JPG',
            description: '<h3>27 km</h3>En Oviedo, Alfonso II mandó construir la Cámara Santa para albergar reliquias traídas desde Jerusalén, como el Santo Sudario. Este lugar se convirtió en un importante centro de peregrinación, complementando el culto a Santiago. ',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-4-tineo-pola-de-allande/" target="_blank">Perfil de etapa</a>',
            location: {
                center: [-6.61225, 43.27178 ],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 5',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 5: Pola de Allande - La Mesa',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/La_Mesa_%28Grandas_de_Salime%2C_Asturias%29.jpg',
            description: '<h3>21,9</h3>Bajo el reinado de Alfonso III, el Camino Primitivo se consolidó como ruta de peregrinación. El monarca promovió el culto a Santiago y fortaleció las infraestructuras del camino, atrayendo a peregrinos de diversas regiones europeas.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-5-pola-de-allande-la-mesa/" target="_blank">Perfil de etapa</a>',
            location: {
                center: [-6.80353, 43.21823],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 6',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 6: La Mesa - Grandas de Salime',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Embalse_de_Salime.jpg',
            description: '<h3>16 km</h3>Alfonso III, sucesor de Alfonso II, realizó su propia peregrinación a Santiago y otorgó privilegios al santuario, impulsando la difusión del culto jacobeo más allá de las fronteras del reino de Asturias.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-6-la-mesa-grandas-de-salime/" target="_blank">Perfil de etapa</a>',
            location: {
                center:[-6.87374, 43.21932],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 7',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 7: Grandas de Salime - Fonsagrada',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Casa_do_Concello_da_Fonsagrada%2C_Lugo.jpg',
            description: '<h3>25,2 km</h3>El Camino Primitivo, también conocido como "ruta astur-galaica del interior" o "vía de Alfonso II el Casto", conectaba Oviedo con Santiago a través de las montañas de Asturias y Galicia, ofreciendo una experiencia de peregrinación íntima y auténtica.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-7-grandas-de-salime-fonsagrada/" target="_blank">Perfil de etapa</a>',
            location: {
                center:[-7.06804,43.12456],
                zoom: 10,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 8',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 8: Fonsagrada - O Cádavo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Cruz_de_los_%C3%81ngeles_de_Oviedo.JPG',
            description: '<h3>24,3 km</h3> La ciudad de Oviedo, punto de partida del Camino Primitivo, fue un centro neurálgico de las peregrinaciones a Santiago mientras fue capital del reino. Su catedral y reliquias la convirtieron en un destino de gran relevancia espiritual.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-8-fonsagradapadron-o-cadavo-baleira/" target="_blank">Perfil de etapa</a>',
            location: {
                center:[-7.24706, 43.01639],
                zoom: 8,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 9',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 9: O Cádavo - Lugo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Catedral_de_Lugo%2C_Galicia_%28Spain%29.jpg',
            description: '<h3>29,5 km</h3>A lo largo del Camino Primitivo se encuentran importantes hitos patrimoniales, como la catedral de Lugo y el monasterio de Santa María la Real de Obona, que enriquecen la experiencia espiritual del peregrino.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-9-o-cadavo-baleira-lugo/" target="_blank">Perfil de etapa</a>',
            location: {
                center:[ -7.55312, 43.01030],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 1.2, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 10',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 10: Lugo - Ferreira',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Frouxeira_2.jpg',
            description: '<h3>26,5 km</h3>Los reinados de Alfonso II y Alfonso III sentaron las bases del Camino de Santiago como ruta de peregrinación, estableciendo una tradición que perdura hasta nuestros días y que ha sido reconocida como Patrimonio Mundial.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-10-lugo-san-romao-da-retorta/" target="_blank">Perfil de etapa</a>',
            location: {
                center:[-7.82042, 42.94637],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 11',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 11: Ferreira - Melide',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Panor%C3%A1mica_da_Vila_de_Melide.jpeg',
            description: '<h3>20 km</h3>En Melide, el Camino Primitivo se une al Camino Francés, permitiendo a los peregrinos continuar su viaje hacia Santiago por una ruta más transitada, pero sin perder la esencia del camino original.',
            website: '<a href="https://www.pilgrim.es/camino-primitivo/etapa-11-san-romao-da-retorta-melide/" target="_blank">Perfil de etapa</a>',
            location: {
                center:[-8.01462, 42.91848],
                zoom: 12,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 12',
            alignment: 'right',
            hidden: false,
            title: 'Etapa 12: Melide - Arzúa',
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Saint_Jean_Pied_de_Port_Coquille.jpg',
            description: '<h3>14 km</h3>CAunque con el tiempo el Camino Francés ganó protagonismo, el Camino Primitivo ha mantenido su atractivo por ofrecer una experiencia más solitaria y conectada con la naturaleza, recorriendo paisajes de gran belleza y valor histórico. ',
            website: '<a href="https://www.pilgrim.es/camino-frances/etapa-31-melide-arzua/" target="_blank">Perfil de etapa</a>',
            location: {
                center:[-8.16280, 42.92629],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 1.2, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'Etapa 13',
            alignment: 'left',
            hidden: false,
            title: 'Etapa 13: Arzua - O Pedrouzo',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Igrexa_de_Santaia_de_Arca%2C_O_Pino.jpg',
            description: '<h3>19,3 km</h3>En la actualidad, el Camino Primitivo ha sido redescubierto por peregrinos que buscan una ruta más auténtica y menos concurrida, valorando su riqueza histórica y espiritual.',
            website: '<a href="https://www.pilgrim.es/camino-frances/etapa-32-arzua-o-pedrouzo/" target="_blank"> Perfil de etapa</a>',
            location: {
                center:[ -8.36587, 42.90427],
                zoom: 9,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
        id: 'Etapa 14',
            alignment: 'center',
            hidden: false,
            title: 'Etapa final: O Pedrouzo - Santiago de Compostela',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Catedral_de_Santiago_de_Compostela_agosto_2018_%28cropped%29.jpg',
            description: '<h3>19,4 km</h3>Recorrer el Camino Primitivo es adentrarse en la historia del cristianismo en la península ibérica, siguiendo los pasos de los primeros peregrinos y conectando con una tradición milenaria que sigue viva en cada etapa del camino.',
            website: '<a href="https://www.pilgrim.es/camino-frances/etapa-33-o-pedrouzo-santiago-de-compostela/" target="_blank">Perfil de etapa</a>',
            location: {
                center:[-8.54563, 42.88050],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 1.5, 
                curve: 1.5 
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        }


    ]
};
