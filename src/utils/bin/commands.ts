// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  var c = `
  ABOUT ME:
  ---------------------------------------------
  whois        : Who is Jia Yu?
  timeline     : What have I been doing? 
  cert         : My certificates   
  sumfetch     : Display of social networks
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
'sumfetch' - social networks.
'timeline' - my journey`;
};

export const timeline = async (args: string[]): Promise<string> => {
  var timeline = 
  `
  <b>My Journey</b>

  2019:
  During my first year in a new environment, I had many firsts. For example, I had the 
  opportunity to be the Chairperson of my class. I planned class outings and led my 
  class in our Overseas Leading Experience to Brunei. This experience is one that I 
  will never forget, teaching me the importance of leading oneself before others. 
  
  Apart from my leadership experience, I joined <u><a href="https://www.sstinc.org/" target="_blank">SSTInc</a></u>, 
  an interest group in my school where we learnt the necessary technical skills 
  to create applications with real world solutions. I learnt how to create apps on 
  IOS, Android, later learning React and Flutter. This sparked my interest in coding 
  and remains a hobby of mine till today. 
  
  2020:
  I joined the Student Council as a member, in the midst of the Covid-19 Pandemic. 
  At the beginning, it was a massive hurdle as we had to rethink how we could carry 
  out projects online. Thankfully, after many changes, we made it work, carrying out 
  our yearly SConnect Session where we gather students from our school to raise concerns 
  and solutions to be made to the school. 
  
  I had also joined the Digital Citizenship Committee in my school where we plan projects
  advocating for Cyber Wellness in my school and community. We planned projects such as 
  Cyber Wellness Primary School Outreach which is a project where we invite 16 primary 
  schools to our workshop. Where we teach the students how to advocate for Cyber Wellness
  in their own schools. 
  
  2021:
  During this year, I became the Vice-chairperson of the Student Council and held the 
  EXCO position of the Digital Citizenship Committee, continuing my efforts to play a 
  larger part in leading these events, working around the many measures set in place 
  by Covid-19. This year challenged me to grow and improve myself not just in terms 
  of technical ability but mental fortitude amidst all the work. 
  
  2022:
  This being the last of a very short time in my school, I decided to create a small 
  project with a group of friends where we planned out and created a program which 
  uses Machine Learning to Identify Spam messages. This project came about from the 
  wave of bank scams which plagued the news. Creating the program, we faced challenges
  in terms of a lack of data. But we did out best with what we could, learning new 
  skills along the way.
   `;

  return timeline;
};

export const cert = async (args: string[]): Promise<string> => {
  var certs = 
  `
  <b>My Certificates: </b>

  - Completed <u><a href="https://drive.google.com/file/d/181VuiSEN6VIOvZcg5J-MyjkRy02epoMJ/view?usp=sharing" target="_blank">SYFC Aircraft Propulsion Systems Course</a></u>
  - Completed <u><a href="https://drive.google.com/file/d/1Y-dtzlhv3SfA9vjzUCzYcQ_Am4ZvKL2f/view?usp=sharing" target="_blank">JA It's My Business!</a></u>
  - Achieved <u><a href="https://drive.google.com/file/d/1ZiSvfDdPc7ke_BdVn1jh8gotBL6sP7IN/view?usp=sharing" target="_blank">Aikido 6th Kyu (Blue)</a></u>
  - Participated in <u><a href="https://drive.google.com/file/d/1t7tnQFXeCgAeQU2bOp3LMvlxXcghYbly/view?usp=sharing" target="_blank">Youth Cyber Exploration Programme (YCEP)</a></u>
  - Completed <u><a href="https://drive.google.com/file/d/1_ob5Ukb-K5h-jJTwq6G--BMy4VJwoF1x/view?usp=sharing" target="_blank">Cyber Wellness Online Workshop for West Zone Secondary Schools</a></u>
  - Completed <u><a href="https://drive.google.com/file/d/18pgZgzjUoRAhtYQRR1ZR5l-EIksSkse5/view?usp=sharing" target="_blank">JA Economics for success</a></u>
  - Participated in <u><a href="https://drive.google.com/file/d/12W8q3wq9tYjNVQYPuHHw8YARvJOghcg4/view?usp=sharing" target="_blank">peacemakers conference</a></u>
  - Completed <u><a href="https://drive.google.com/file/d/1Kw06jmKoLg5t0kPstB8A0QZIC_9nPIpt/view?usp=sharing" target="_blank">GeeksHacking Python Reinforcement Learning Camp</a></u>

  Link: <u><a href="https://drive.google.com/drive/folders/1HB0owCTfa6cwUjYH8rRlCVHQySlaRoyV?usp=sharing" target="_blank">Google Drive</a></u>
  `;
  return certs;
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
  Type 'whois' to learn more about me.
`;
};
