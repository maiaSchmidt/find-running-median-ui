import { Component } from "@angular/core";
import { MedianService } from "src/app/services/median.service";
import { rendererTypeName } from "@angular/compiler";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private medianService: MedianService) {}

  title: String = "Calculate Incremental Median";
  newNumbers: number[] = [];

  addNumbers(newNumbers: number[]) {
    if (newNumbers) {
      this.newNumbers = newNumbers;
    }
  }

  public calculateIncrementalMedian(): Number[] {
    let result: number[];

    this.medianService
      .calculateIncrementalMedian(this.newNumbers)
      .subscribe(
        (medians: number[]) => (result = medians),
        err => console.log(err)
      );

    return result;
  }
}
