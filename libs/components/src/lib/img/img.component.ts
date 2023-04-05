import { AfterContentInit, Component, Input, OnInit } from '@angular/core';

interface Source{
  path: string;
  media: string
}

@Component({
  selector: 'rb-img',
  templateUrl: './img.component.html'
})
export class ImgComponent implements AfterContentInit {

  @Input() path = '';
  @Input() alt = '';
  sources: Source[] =[]


  constructor( ) { }

  ngAfterContentInit(): void {
    this.generateSizes();
  }
  generateSizes() {
    const splitPath = this.path.split('/')
    const fullname = splitPath.pop()
    const path = splitPath.join('/')
    const splitName = fullname?.split('.') ?? []
    const ext = splitName.pop()
    const name = splitName.pop()
    this.sources = [
      {
        path: `${path}/${name}-large.webp`,
        media: '(min-width: 2000px)'
      },
      {
        path: `${path}/${name}-medium.webp`,
        media: '(min-width: 640px)'
      },
      {
        path: `${path}/${name}-large.${ext}`,
        media: '(min-width: 200px)'
      },  
      {
        path: `${path}/${name}-large.${ext}`,
        media: '(min-width: 2000px)'
      },
      {
        path: `${path}/${name}-medium.${ext}`,
        media: '(min-width: 640px)'
      },
      {
        path: `${path}/${name}-large.webp`,
        media: '(min-width: 200px)'
      }, 

    ]

  }

}
