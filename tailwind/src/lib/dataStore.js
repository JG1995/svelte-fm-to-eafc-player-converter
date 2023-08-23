// dataStore.js
import { writable } from 'svelte/store';

const createDataStore = () => {
    const { subscribe, update } = writable({
        firstname: "",
        lastname: "",
        overall: 0,
        birthday: "",
        heightMetric: 0,
        heightImperial: 0,
        weightMetric: 0,
        weightImperial: 0,
        strongfoot: "",
        weakfoot: 0,
        skills: 0,
        avgPace: 0,
        avgShooting: 0,
        avgPassing: 0,
        avgDribbling: 0,
        avgDefence: 0,
        avgPhysical: 0,
        crossing: 0,
        finishing: 0,
        headingAccuracy: 0,
        shortPassing: 0,
        volleys: 0,
        dribbling: 0,
        curve: 0,
        freeKickAccuracy: 0,
        longPassing: 0,
        ballControl: 0,
        acceleration: 0,
        sprintSpeed: 0,
        agility: 0,
        reactions: 0,
        balance: 0,
        shotPower: 0,
        jumping: 0,
        stamina: 0,
        strength: 0,
        longShots: 0,
        aggression: 0,
        interceptions: 0,
        positioning: 0,
        vision: 0,
        penalties: 0,
        composure: 0,
        defensiveAwareness: 0,
        standingTackle: 0,
        slidingTackle: 0,
        GKDiving: 0,
        GKHandling: 0,
        GKKicking: 0,
        GKPositioning: 0,
        GKReflexes: 0
    });

    return {
        subscribe,

        processData: (dataset) => update(data => {
            // You can perform computations based on the incoming dataset.
            // For example, if the dataset is an array of numbers:
            data.averageValue = dataset.reduce((acc, curr) => acc + curr, 0) / dataset.length;
            data.maxValue = Math.max(...dataset);
            data.minValue = Math.min(...dataset);
            data.firstname = "";
            data.lastname = "";
            data.overall = 0;
            data.birthday = 0;
            data.heightMetric = 0;
            data.heightImperial = 0;
            data.weightMetric = 0;
            data.weightImperial = 0;
            data.strongfoot = "";
            data.weakfoot = 0;
            data.skills = 0;
            data.avgPace = 0;
            data.avgShooting = 0;
            data.avgPassing = 0;
            data.avgDribbling = 0;
            data.avgDefence = 0;
            data.avgPhysical = 0;
            data.crossing = 0;
            data.finishing = 0;
            data.headingAccuracy = 0;
            data.shortPassing = 0;
            data.volleys = 0;
            data.dribbling = 0;
            data.curve = 0;
            data.freeKickAccuracy = 0;
            data.longPassing = 0;
            data.ballControl = 0;
            data.acceleration = 0;
            data.sprintSpeed = 0;
            data.agility = 0;
            data.reactions = 0;
            data.balance = 0;
            data.shotPower = 0;
            data.jumping = 0;
            data.stamina = 0;
            data.strength = 0;
            data.longShots = 0;
            data.aggression = 0;
            data.interceptions = 0;
            data.positioning = 0;
            data.vision = 0;
            data.penalties = 0;
            data.composure = 0;
            data.defensiveAwareness = 0;
            data.standingTackle = 0;
            data.slidingTackle = 0;
            data.GKDiving = 0;
            data.GKHandling = 0;
            data.GKKicking = 0;
            data.GKPositioning = 0;
            data.GKReflexes = 0;

            return data;
        })
    };
}

export const dataStore = createDataStore();
