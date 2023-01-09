import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { myDiscord, myEmail, myGithub, myLinkedIn, myTelegram } from 'src/app/globals/globals';
import '../../../globals/globals.ts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  linkedIn = faLinkedin;
  discord = faDiscord;
  telegram = faTelegram;
  github = faGithub;
  gmail = faEnvelope;
  location = faLocationDot;

  myLinkedIn = myLinkedIn;
  myDiscord = myDiscord;
  myTelegram = myTelegram;
  myGithub = myGithub;
  myEmail = myEmail;
  

  goToLink(url: string){
    window.open(url, "_blank");
}


}
