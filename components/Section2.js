import {IoMdCopy}from 'react-icons/Io'
import {IoAlarmOutline, IoBookOutline}from 'react-icons/Io5'

const titre =[
    {
        icon: <IoMdCopy size={"40"} className="icon-Section2"/>,
        title: 'WordPress Theme',
        description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.',
        className: 'icon-copy'
    },
    {
        icon: <IoAlarmOutline size={"40"} className="icon-Section2"/>,
        title: 'Responsive Design',
        description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.',
        className: 'icon-timer'
    },
    {
        icon: <IoBookOutline size={"40"} className="icon-Section2"/>,
        title: 'Media & Advertisement',
        description: 'Lorem ipsum dolor sit amet, consectetur.. Sed id lorem eget orci dictum facilisis vel id tellus. Nullam iaculis arcu at mauris dapibus consectetur.',
        className: 'icon-book'
    }
]

const list = titre.map(elem=>{
    return(
        <>
            <div class={"card " + elem.className }>
                {elem.icon}
                <h3>{elem.title}</h3>
                <p>{elem.description}</p>
            </div>
        </> 
    )
})

export default function Section2() {
    return (
        <>
            <section id="section2">
                <div className="container cards-Section2">
                    {list}
                </div>
            </section>
        </>
    )
}

