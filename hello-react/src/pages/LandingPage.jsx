import logo from './../logo.svg';
import menuLogoXs from './../images/ironhack-logo-xs.png'
import menuTopXs from './../images/menu-top-xs.png'
import declarativeImg from './../images/icon1.png'
import componentsImg from './../images/icon2.png'
import singleWayImg from './../images/icon3.png'
import jsxImg from './../images/icon4.png'

const LandingPage = () => {

    return (
        <div className='LandingPage'>
            <header
                style={{
                    position: 'relative',
                    overflow: 'hidden',
                    width:'95vw',
                    margin:'0 auto 1.5rem',
                    height:'38rem',
                    color:'white',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'normal',
                    textAlign:'left',
                    background: `url(${logo}) 0 0 repeat rgb(34,39,54)`,
                    backgroundSize:'33%',
                }}
            >
                <nav
                    style={{
                        width:'90vw',
                        margin:'1rem 2.5vw',
                        height:'49px',
                        display:'flex',
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                    }}
                >
                    <img src={menuLogoXs} alt="ironhack-logo-xs" />
                    <img src={menuTopXs} alt="ironhack-logo-xs" />
                </nav>
                <h1
                    style={{
                        fontSize:'5rem',
                        fontWeight:'500',
                        margin:'2rem 4rem'
                    }}
                >
                    Say hello to<br/>ReactJs
                </h1>
                <p
                    style={{
                        margin:'0 4rem',
                        fontSize:'1.1rem',
                        lineHeight:'1.65rem',
                    }}
                >
                    You will know how to use<br/>the most popular library<br/>and become a super Ninja developer.
                </p>
                <div
                    className='awesome'
                    style={{
                        color:'black',
                        fontSize:'1.25rem',
                        fontWeight:'700',
                        backgroundColor:'white',
                        margin:'4rem',
                        width:'9vw',
                        height:'4rem',
                        borderRadius:'.25rem',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    Awesome!
                </div>
            </header>
            <section
                className='advantages'
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-evenly',
                    alignItems:'center',
                    width:'95vw',
                    margin:'1.2rem auto',
                }}
            >
                    <article
                        className='advantage'
                    >
                        <img src={declarativeImg} alt="declarative" />
                        <h3>
                            Declarative
                        </h3>
                        <p>
                            React makes it painless to create interactive UIs.
                        </p>
                    </article>
                    <article
                        className='advantage'
                        
                    >
                        <img src={componentsImg} alt="components" />
                        <h3>
                            Components
                        </h3>
                        <p>
                            Build encapsulated components that manage their state.
                        </p>
                    </article>
                    <article className='advantage'>
                        <img src={singleWayImg} alt="single-way" />
                        <h3>
                            Single-Way
                        </h3>
                        <p>
                            A set of immutable values are passed to the component's.
                        </p>
                    </article>
                    <article className='advantage'>
                        <img src={jsxImg} alt="JSX" />
                        <h3>
                            JSX
                        </h3>
                        <p>
                            Statically typed, designed to run on modern browser's.
                        </p>
                    </article>
            </section>
        </div>
    )
}

export default LandingPage;