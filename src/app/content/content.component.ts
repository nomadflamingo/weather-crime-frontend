import { Component, OnInit } from '@angular/core';
import { UsMapComponent } from 'angular-us-map';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY']
  resps: any;
  thearray: any
  state: string
  isMapVisible: boolean
  showContent: boolean
  color: any

  info = {
    year: '',
    min_temp: '',
    max_temp: '',
    avg_temp: '',
    pcp: '',
    crime_type: '',
  };

  constructor(private infoService: InfoService) {
    this.showContent = false;
    this.isMapVisible = false;
    this.state = "AK";
  }

  ngOnInit(): void { }

  getInfo(): void {
    this.infoService.get(this.info.year, this.info.crime_type, this.info.avg_temp, this.info.min_temp, this.info.max_temp, this.info.pcp)
      .subscribe(
        data => {
          this.resps = data;
          let result = []
          for (var i = 0; i < 50; i++) {
            if (this.resps[this.states[i]] == null) {
              result.push({
                'State': this.states[i],
                'Color': '#ADA7A7'
              })
            }

            else {
              result.push({
                'State': this.states[i],
                'Color': this.getColors(this.resps[this.states[i]].Prediction)
              })
            }

          }
          this.thearray = result

        },
        error => {
          console.log(error);
        });
  }

  showPopover(show: boolean, name: string) {
    this.showContent = show;
    this.state = name
  }

  getColors(prediction: Number) {


    if (0 <= prediction && prediction < 0.5) {
      return '#EFD8C7';
    }
    else if (0.5 <= prediction && prediction < 1) {
      return '#EDC6AA';
    }
    else if (1 <= prediction && prediction < 2) {
      return '#EFBC97';
    }
    else if (2 <= prediction && prediction < 3) {
      return '#F09867';
    }
    else if (4 <= prediction && prediction < 5) {
      return '#F0B083';
    }
    else if (5 <= prediction && prediction < 6) {
      return '#F1A067';
    }
    else if (6 < prediction && prediction < 8) {
      return '#F0904D';
    }
    else if (8 <= prediction && prediction < 12) {
      return '#F1741B';
    }
    else if (12 <= prediction && prediction < 20) {
      return '#FF6A00';
    }
    else if (20 <= prediction && prediction < 30) {
      return '#D95D05';
    }
    else if (30 <= prediction && prediction < 50) {
      return '#B44E06';
    }
    else if (50 <= prediction && prediction < 60) {
      return '#954105';
    }
    else if (60 <= prediction && prediction < 80) {
      return '#7C3605';
    }
    else if (80 <= prediction && prediction < 100) {
      return '#632C04';
    }
    else {
      return '#492004'
    }
  }
// MORE COLORS
// #331703
// #1C0D02
// #000000

  getColor(prediction: Number) {
    if (prediction == 0) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'AK').Color;
      return this.color
    }

    else if (prediction == 1) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'AL').Color;
      return this.color
    }
    else if (prediction == 2) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'AR').Color;
      return this.color
    }
    else if (prediction == 3) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'AZ').Color;
      return this.color
    }

    else if (prediction == 4) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'CA').Color;
      return this.color
    }
    else if (prediction == 5) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'CO').Color;
      return this.color
    }
    else if (prediction == 6) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'CT').Color;
      return this.color
    }

    else if (prediction == 7) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'DE').Color;
      return this.color
    }
    else if (prediction == 8) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'FL').Color;
      return this.color
    }
    else if (prediction == 9) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'GA').Color;
      return this.color
    }
    else if (prediction == 10) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'HI').Color;
      return this.color
    }

    else if (prediction == 11) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'IA').Color;
      return this.color
    }
    else if (prediction == 12) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'ID').Color;
      return this.color
    }
    else if (prediction == 13) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'IL').Color;
      return this.color
    }

    else if (prediction == 14) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'IN').Color;
      return this.color
    }
    else if (prediction == 15) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'KS').Color;
      return this.color
    }
    else if (prediction == 16) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'KY').Color;
      return this.color
    }

    else if (prediction == 17) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'LA').Color;
      return this.color
    }
    else if (prediction == 18) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'MA').Color;
      return this.color
    }
    else if (prediction == 19) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'MD').Color;
      return this.color
    }
    else if (prediction == 20) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'ME').Color;
      return this.color
    }

    else if (prediction == 21) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'MI').Color;
      return this.color
    }
    else if (prediction == 22) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'MN').Color;
      return this.color
    }
    else if (prediction == 23) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'MO').Color;
      return this.color
    }

    else if (prediction == 24) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'MS').Color;
      return this.color
    }
    else if (prediction == 25) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'MT').Color;
      return this.color
    }
    else if (prediction == 26) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'NC').Color;
      return this.color
    }

    else if (prediction == 27) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'ND').Color;
      return this.color
    }
    else if (prediction == 28) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'NE').Color;
      return this.color
    }
    else if (prediction == 29) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'NH').Color;
      return this.color
    }
    else if (prediction == 30) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'NJ').Color;
      return this.color
    }

    else if (prediction == 31) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'NM').Color;
      return this.color
    }
    else if (prediction == 32) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'NV').Color;
      return this.color
    }
    else if (prediction == 33) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'NY').Color;
      return this.color
    }

    else if (prediction == 34) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'OH').Color;
      return this.color
    }
    else if (prediction == 35) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'OK').Color;
      return this.color
    }
    else if (prediction == 36) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'OR').Color;
      return this.color
    }

    else if (prediction == 37) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'PA').Color;
      return this.color
    }
    else if (prediction == 38) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'RI').Color;
      return this.color
    }
    else if (prediction == 39) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'SC').Color;
      return this.color
    }
    else if (prediction == 40) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'SD').Color;
      return this.color
    }

    else if (prediction == 41) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'TN').Color;
      return this.color
    }
    else if (prediction == 42) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'TX').Color;
      return this.color
    }
    else if (prediction == 43) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'UT').Color;
      return this.color
    }

    else if (prediction == 44) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'VA').Color;
      return this.color
    }
    else if (prediction == 45) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'VT').Color;
      return this.color
    }
    else if (prediction == 46) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'WA').Color;
      return this.color
    }

    else if (prediction == 47) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'WI').Color;
      return this.color
    }
    else if (prediction == 48) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'WV').Color;
      return this.color
    }
    else if (prediction == 49) {
      this.color = this.thearray?.find((x: { State: string; }) => x.State === 'WY').Color;
      return this.color
    }

  }

}
