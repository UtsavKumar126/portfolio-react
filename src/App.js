import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Details from "./Components/Details";


const data=[
    {

        title:"Contact",
        desc:`As a recent graduate in Mechanical Engineering with a passion for
        technology and programming, I am on an exhilarating journey to merge the
        precision of engineering with the creativity of software development. My
        transition into the world of full-stack development has been fueled by a
        genuine curiosity and an unwavering determination to explore the endless
        possibilities at the intersection of these two domains. 
        My journey began with an insatiable thirst for knowledge, leading me to delve deep into
        Java, DSA, Spring Boot, HTML, CSS, JavaScript, and React. Through
        numerous projects, I've not only honed my technical skills but also
        cultivated a keen problem-solving mindset that I believe is pivotal in
        both engineering and software development landscapes. Driven by a desire
        to create innovative solutions, I approach each project as an
        opportunity to blend my engineering acumen with my programming finesse.
        Whether it's designing efficient algorithms or crafting intuitive user
        interfaces, I strive to deliver solutions that transcend boundaries and
        leave a lasting impact.
        I am determined to embark on a career as a full-stack developer, leveraging my diverse skill set to contribute
        meaningfully to the ever-evolving tech industry. My dedication, coupled
        with a penchant for continuous learning, fuels my aspirations to be at
        the forefront of technological innovation. Beyond the lines of code and
        intricate designs, I am an avid enthusiast of collaboration, innovation,
        and embracing challenges.
        I am excited about the prospect of contributing my unique blend of skills and perspectives to a dynamic
        team, where I can learn, grow, and innovate while leaving a meaningful
        mark in the world of technology. Let's connect and explore the
        possibilities of weaving engineering precision into the artistry of
        software development.`

    },
    {

        title:"Skills",
        desc:`As a recent graduate in Mechanical Engineering with a passion for
        technology and programming, I am on an exhilarating journey to merge the
        precision of engineering with the creativity of software development. My
        transition into the world of full-stack development has been fueled by a
        genuine curiosity and an unwavering determination to explore the endless
        possibilities at the intersection of these two domains. 
        My journey began with an insatiable thirst for knowledge, leading me to delve deep into
        Java, DSA, Spring Boot, HTML, CSS, JavaScript, and React. Through
        numerous projects, I've not only honed my technical skills but also
        cultivated a keen problem-solving mindset that I believe is pivotal in
        both engineering and software development landscapes. Driven by a desire
        to create innovative solutions, I approach each project as an
        opportunity to blend my engineering acumen with my programming finesse.
        Whether it's designing efficient algorithms or crafting intuitive user
        interfaces, I strive to deliver solutions that transcend boundaries and
        leave a lasting impact.
        I am determined to embark on a career as a full-stack developer, leveraging my diverse skill set to contribute
        meaningfully to the ever-evolving tech industry. My dedication, coupled
        with a penchant for continuous learning, fuels my aspirations to be at
        the forefront of technological innovation. Beyond the lines of code and
        intricate designs, I am an avid enthusiast of collaboration, innovation,
        and embracing challenges.
        I am excited about the prospect of contributing my unique blend of skills and perspectives to a dynamic
        team, where I can learn, grow, and innovate while leaving a meaningful
        mark in the world of technology. Let's connect and explore the
        possibilities of weaving engineering precision into the artistry of
        software development.`
    },
    {

        title:"Qualification",
        desc:`As a recent graduate in Mechanical Engineering with a passion for
        technology and programming, I am on an exhilarating journey to merge the
        precision of engineering with the creativity of software development. My
        transition into the world of full-stack development has been fueled by a
        genuine curiosity and an unwavering determination to explore the endless
        possibilities at the intersection of these two domains. 
        My journey began with an insatiable thirst for knowledge, leading me to delve deep into
        Java, DSA, Spring Boot, HTML, CSS, JavaScript, and React. Through
        numerous projects, I've not only honed my technical skills but also
        cultivated a keen problem-solving mindset that I believe is pivotal in
        both engineering and software development landscapes. Driven by a desire
        to create innovative solutions, I approach each project as an
        opportunity to blend my engineering acumen with my programming finesse.
        Whether it's designing efficient algorithms or crafting intuitive user
        interfaces, I strive to deliver solutions that transcend boundaries and
        leave a lasting impact.
        I am determined to embark on a career as a full-stack developer, leveraging my diverse skill set to contribute
        meaningfully to the ever-evolving tech industry. My dedication, coupled
        with a penchant for continuous learning, fuels my aspirations to be at
        the forefront of technological innovation. Beyond the lines of code and
        intricate designs, I am an avid enthusiast of collaboration, innovation,
        and embracing challenges.
        I am excited about the prospect of contributing my unique blend of skills and perspectives to a dynamic
        team, where I can learn, grow, and innovate while leaving a meaningful
        mark in the world of technology. Let's connect and explore the
        possibilities of weaving engineering precision into the artistry of
        software development.`

    }
]

const App=()=>{

    return(
        <div>
            <Navbar/>
            <About/>
            {
                data.map((item)=>(
                    <Section
                    title={item.title}
                    desc={item.desc}/>
                ))
            }
            <Details/>
        </div>
    )
}


export default App