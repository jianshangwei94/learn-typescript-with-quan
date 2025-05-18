import { BurmeseGoldWeight, MetricWeight } from "./gold-model";


export function convertBurmeseGoldToGram (gold: BurmeseGoldWeight): number{

    const totalkyat = gold.kyat + (gold.pae / 16) + (gold.yway / 128);
    const totalgram = totalkyat * 16.606;
    return totalgram
}

export function convertBurmeseGoldToMetricWeight (gold: BurmeseGoldWeight): MetricWeight{
    const totalkyat = gold.kyat + (gold.pae / 16) + (gold.yway / 128);
    const totalgram = totalkyat * 16.606;
    return new MetricWeight(totalgram);
}