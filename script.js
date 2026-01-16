let card = document.querySelector('main section .card');
let button = document.querySelector('main section button');

let arr = [
    {
        Team : 'RCB',
        Captain : 'Rajat Patidar',
        Trophies : 1,
        Years_Won : [2025],
        PrimaryColor : '#7a2d34ff',
        SecondaryColor : '#C2A34E'
    },
    {
        Team : 'PBKS',
        Captain : 'Shreyas Iyer',
        Trophies : 0,
        Years_Won : [],
        PrimaryColor : '#D7181F',
        SecondaryColor : '#FBFBFA'
    },
    {
        Team : 'RR',
        Captain : 'Sanju Samson',
        Trophies : 1,
        Years_Won : [2008],
        PrimaryColor : '#EB82B5',
        SecondaryColor : '#2E3D9A'
    },
    {
        Team : 'MI',
        Captain : 'Hardik Pandya',
        Trophies : 5,
        Years_Won : [2013, 2015, 2017, 2019, 2020],
        PrimaryColor : '#2E6AB1',
        SecondaryColor : '#FAD230'
    },
    {
        Team : 'CSK',
        Captain : 'MS Dhoni',
        Trophies : 5,
        Years_Won : [2010, 2011, 2018, 2021, 2023],
        PrimaryColor : '#ffcb03',
        SecondaryColor : '#c37e06ff'
    },
    {
        Team : 'KKR',
        Captain : 'Ajinkya Rahane',
        Trophies : 3,
        Years_Won : [2012, 2014, 2024],
        PrimaryColor : '#28204A',
        SecondaryColor : '#FEF0AE'
    },
    {
        Team : 'GT',
        Captain : 'Shubman Gill',
        Trophies : 1,
        Years_Won : [2022],
        PrimaryColor : '#3a667dff',
        SecondaryColor : '#cfaf56ff'
    },
    {
        Team : 'LSG',
        Captain : 'Rishabh Pant',
        Trophies : 0,
        Years_Won : [],
        PrimaryColor : '#0648BC',
        SecondaryColor : '#FFFFFF'
    },
    {
        Team : 'SRH',
        Captain : 'Pat Cummins',
        Trophies : 1,
        Years_Won : [2016],
        PrimaryColor : '#F26522',
        SecondaryColor : '#664b20ff'
    },
    {
        Team : 'DC',
        Captain : 'Axar Patel',
        Trophies : 0,
        Years_Won : [],
        PrimaryColor : '#6c2926ff',
        SecondaryColor : '#5f86c5ff'
    },
]


button.addEventListener('click', function () {
    let randomIndex = Math.floor(Math.random() * arr.length);
    card.innerHTML = `<h1>
                        Team: ${arr[randomIndex].Team} <br>
                        Captain: ${arr[randomIndex].Captain} <br>
                        Trophies : ${arr[randomIndex].Trophies} <br>
                        Years Won: ${arr[randomIndex].Years_Won}
                    </h1>`
    card.style.backgroundColor = arr[randomIndex].PrimaryColor;
    card.style.color = arr[randomIndex].SecondaryColor;
    
})