import { Component } from "@angular/core";
import { MedianService } from "src/app/services/median.service";
import { NumbersMedians } from "./models/numbers-medians.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private medianService: MedianService) {}

  title: String = "Calculate Incremental Median";
  newNumbers: number[] = [];
  numbersMediansHistory: NumbersMedians[] = [];
  displayedColumns: string[] = ['Numbers', 'Incremental medians'];

  addNumbers(newNumbers: number[]) {
    if (newNumbers) {
      this.newNumbers = newNumbers;
    }
  }

  public calculateIncrementalMedian(): void {
    let result: number[];

    this.medianService
      .calculateIncrementalMedian(this.newNumbers)
      .subscribe(
        (incrementalMedians: number[]) =>
          this.numbersMediansHistory.push({
            numbers: this.newNumbers,
            medians: incrementalMedians
          }),
        err => console.log(err)
      );
  }
}
