import {useState} from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const allCategories = ['All', 'Photography', 'Ios App', 'Development', 'Design']

export default function Test() {

    const items=[{
        id: 1,
        img: <img src="img/portfolio/portfolio-1.jpg" alt="" />,
        title:"AirBnB Postcard",
        category: 'Design'
      },
      {
        id: 2,
        img: <img src="img/portfolio/portfolio-2.jpg" alt="" />,
        title:"AirBnB Postcard",
        category: 'Ios App'
      },
      {
        id: 3,
        img: <img src="img/portfolio/portfolio-3.jpg" alt="" />,
        title:"AirBnB Postcard",
        category: 'Photography'
      },
      {
        id: 4,
        img: <img src="img/portfolio/portfolio-4.jpg" alt="" />,
        titre:"AirBnB Postcard",
        category: 'Photography'
      },
      {
        id: 5,
        img: <img src="img/portfolio/portfolio-5.jpg" alt="" />,
        titre:"AirBnB Postcard",
        category: 'Design'
      },
      {
        id: 6,
        img: <img src="img/portfolio/portfolio-1.jpg" alt="" />,
        titre:"AirBnB Postcard",
        category: 'Development'
    }]

    const [menuItem, setMenuItem] = useState(items)
    const [buttons, setButtons] = useState(allCategories)

    const filter = (button) =>{
        if(button === 'All'){
            setMenuItem(items)
            return
        }

        const filteredData = items.filter(item => item.category === button)
        setMenuItem(filteredData)
    }

    const menu = menuItem.map((item) =>{
        return (
            <>
                <div className="cardPortfolio" key={item.id}>
                    {item.img}
                    <div className="caption">
                        <a className="search-icon" href="#">
                            <AiOutlineSearch size={"35"} />
                        </a>
                        <h4><a href="#">{item.title}</a></h4>
                    </div>
                </div>
            </>
        )
    })

    const button = buttons.map((cat, i) =>{
        return <button type="button" onClick={() => filter(cat)}>{cat}</button>
    })

    return (
        <>
        <section id="section4">
            <div id="titre-general">
                <h4>RECENT WORK</h4>
                <h2>WORK SHOWCASE.</h2>
                <span></span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                    reiciendis quasi itaque, obcaecati atque sit!
                </p>
            </div>

            <div className="portfolio-filter">
                {button}
            </div>

            <div className="allCards">
                {menu}
            </div>
        </section>
        </>
    )
}