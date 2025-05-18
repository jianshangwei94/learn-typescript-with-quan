import { BurmeseGoldWeight, MetricWeight, TroyWeight } from "./gold-model";
import { convertBurmeseGoldToGram, convertBurmeseGoldToMetricWeight } from "./gold-calculation";

console.log('Hello World');

const goldweight =  new BurmeseGoldWeight(1,0,0)
const internationalGoldBar = new MetricWeight(1000);
const ukGoldBar = new TroyWeight(10);

const gram = convertBurmeseGoldToGram(goldweight);
const final = convertBurmeseGoldToMetricWeight(goldweight)

console.log('total weight in gram is ' + gram);
