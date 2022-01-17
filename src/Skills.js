import React from "react"
import { IconContext } from 'react-icons'
import { DiTerminal, DiMongodb, DiJavascript1, DiNodejsSmall, DiBootstrap, DiGithubBadge, DiNpm, DiPostgresql, DiReact, DiVisualstudio } from 'react-icons/di'
function Skills(props) {
    return (
        <div id="skills">
            <h1>Skills</h1>
            <IconContext.Provider value={{ size: "10em", className: "global-class-name"}}>
                <DiJavascript1 />
                <DiNodejsSmall />
                <DiMongodb />
                <DiGithubBadge />
                <DiNpm />
                <DiPostgresql />
                <DiReact />
                <DiVisualstudio />
                <DiBootstrap />
                <DiTerminal />
            </IconContext.Provider>
        </div>
    )
}

export default Skills;