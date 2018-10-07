import { Component, OnInit, Input } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public carouselOptions: NguCarousel;
  public testimonials = [
    {
      photo: 'assets/images/face-1.jpg',
      text: `“I’ve tried using different softwares. The computer is not my strong side.
      There is excellent support behind DevEgret and people to walk you through it.
      If you have any questions they’ll go over that and explain to you how to do that. ”`,
      title: 'Christian Kabanda',
      subtitle: 'Product Manager'
    },
    {
      photo: 'assets/images/face-1.jpg',
      text: `“I’ve tried using different softwares. The computer is not my strong side.
      There is excellent support behind DevEgret and people to walk you through it.
      If you have any questions they’ll go over that and explain to you how to do that. ”`,
      title: 'Olivier Iyakaremye',
      subtitle: 'Product Manager'
    },
    {
    photo: 'assets/images/face-1.jpg',
    text: `“I’ve tried using different softwares. The computer is not my strong side.
    There is excellent support behind DevEgret and people to walk you through it.
    If you have any questions they’ll go over that and explain to you how to do that. ”`,
    title: 'Fabrice BENIMANA',
    subtitle: 'Product Manager'
  }, {
    photo: 'assets/images/face-2.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Marius Kabera',
    subtitle: 'CEO'
  }, {
    photo: 'assets/images/face-3.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Desire Aheza',
    subtitle: 'Software Engineer'
  }, {
    photo: 'assets/images/face-4.jpg',
    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,
    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora."`,
    title: 'Wellars Muhoza',
    subtitle: 'CEO'
  }]
  constructor() { }

  ngOnInit() {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    }
  }

}