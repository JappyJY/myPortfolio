import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
    return `
                ,---------------------------,                  sumfetch:
                |  /---------------------\\  |                 -----------
                | |                       | |                  ABOUT                
                | |                       | |                  ${config.name}
                | |       About me        | |                  <u><a href="${config.resume_url}" target="_blank">resume</a></u>
                | |                       | |                 -----------
                | |                       | |                  CONTACT
                |  \\_____________________/  |                  <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
                |___________________________|                  <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
              ,---\\_____     []     _______/------,          
            /         /______________\\           /|            
          /___________________________________ /  | ___       
          |                                   |   |    )
          |  _ _ _                 [-------]  |   |   (
          |  o o o                 [-------]  |  /    _)_
          |__________________________________ |/     /  /
      /-------------------------------------/|      ( )/
    /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
  /-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/ /
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`;}

export default sumfetch;
