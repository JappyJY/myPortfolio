// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  var c = `
  ABOUT ME:
  ------------------------------------------
  whois        : Who is Jia Yu?
  resume       : View portfolio
  sumfetch     : Display of social networks
  banner       : Startup banner
  projects     : Projects on Github

  LINUX COMMANDS:
  ------------------------------------------
  clear        : Clear terminal
  echo         : Echo's your message
  ls           : View all directories
  cd           : Move between directories
  date         : Todays date
  quote        : Random quote, cuz why not?
  `;
  return `Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

// whoami
export const whois = async (args: string[]): Promise<string> => {
  return `Hey, I am ${config.name}! Currently, I am a Secondary 4 
student from the School of Science and Technology (SST). 
In my free time, I enjoy coding, skateboarding and playing
with new technology!

More about me:
'sumfetch' - short summary.
'resume' - my latest resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  // window.open(`${config.resume_url}`);
  

  return 'Opening resume...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const ls = async (args: string[]): Promise<string> => {
  return `nothing
to
see
here`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories. :'(`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  ██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗██╗
  ██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝██║
  ██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  ██║
  ██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  ╚═╝
  ╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗██╗
   ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝
                                                                                                                                                                            
  I am Lee Jia Yu! Welcome to my interactive web terminal. 

  Type 'help' to see the list of available commands.
  Type 'resume' to see my portfolio. 
`;
};
