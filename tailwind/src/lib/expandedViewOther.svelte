<script>
    export let player;

    function setHeight() {
        // Extract the numeric part and convert to integer
        let cm = parseInt(player.Height, 10);

        // Convert cm to inches
        let totalInches = cm / 2.54;

        // Convert inches to feet and inches
        const feet = Math.floor(totalInches / 12);
        const inches = Math.round(totalInches % 12);

        // Return formatted string
        return `${cm} cm / ${feet}'${inches}"`;
    }

    function setWeight() {
        // Extract the numeric part and convert to integer
        const kg = parseInt(player.Weight, 10);

        // Convert kg to lbs
        const lbs = kg * 2.20462;

        // Return formatted string
        return `${kg} kg / ${lbs.toFixed(0)} lbs`;
    }

    function setBirthday() {
        return player.DoB.split(" ")[0];
    }

    function setStrongFoot(leftFoot, rightFoot) {
        const strengthValues = {
            'Very Weak': 1,
            'Weak': 2,
            'Reasonable': 3,
            'Fairly Strong': 4,
            'Strong': 5,
            'Very Strong': 6
        };

        const leftStrength = strengthValues[leftFoot];
        const rightStrength = strengthValues[rightFoot];

        if (leftStrength > rightStrength) {
            return 'Left Foot';
        } else if (rightStrength > leftStrength) {
            return 'Right Foot';
        } else {
            if (leftStrength === 6) { // Both are 'Very Strong'
                return 'Either';
            } else {
                // If they have the same strength but aren't 'Very Strong',
                // return the 'Left Foot' by default for simplicity.
                return 'Left Foot';
            }
        }
    }

    function setWeakFoot(leftFoot, rightFoot) {
        const stronger = setStrongFoot(leftFoot, rightFoot);

        if (stronger === 'Either') return 5; // If both are 'Very Strong', return 5

        // If not 'Either', find the weaker foot's strength and return its value
        const strengthValue = {
            'Very Weak': 1,
            'Weak': 2,
            'Reasonable': 3,
            'Fairly Strong': 4,
            'Strong': 4
        };

        if (stronger === 'Left Foot') {
            return strengthValue[rightFoot];
        } else {
            return strengthValue[leftFoot];
        }
    }

    function setSkillMoves() {
        return Math.ceil(player.Fla / 4)
    }
</script>

<div class="flex flex-col">
    <div class="font-bold text-left">
        Player Information
    </div>
    <!-- Place for 4 lines of text in div-6 -->
    <div class="flex justify-between w-full">
        <span>Birthday:</span>
        <span>{setBirthday()}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Height:</span>
        <span>{setHeight()}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Weight:</span>
        <span>{setWeight()}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Strong Foot:</span>
        <span>{setStrongFoot(player["Left Foot"], player["Right Foot"])}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Weak Foot:</span>
        <span>{setWeakFoot(player["Left Foot"], player["Right Foot"])}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Skills:</span>
        <span>{setSkillMoves()}</span>
    </div>
</div>