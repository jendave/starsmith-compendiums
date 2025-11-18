/**
 * Build Starting Sector Macro for Ironsworn: Starforged
 * 
 * This macro generates a complete starting sector for Ironsworn: Starforged, including:
 * - Sector scene with hex grid
 * - Settlements with planets and stellar objects
 * - Connections (foes) with progress tracks
 * - Navigation markers
 * - Sector journal with location and connection information
 * - Optional animated passages between settlements
 * 
 * Features:
 * - Zone-based settlement placement for even distribution
 * - Support for Starsmith Expanded Oracles (optional)
 * - Integration with Token Attacher, JB2A, and Sequencer modules
 * - Automatic folder organization
 * 
 * Usage:
 * 1. Run this macro from the Foundry VTT macro bar
 * 2. Select region (Terminus, Outlands, or Expanse)
 * 3. Choose options (Starting Sector, Token Attacher, Passages, Stars, Starsmith Oracles)
 * 4. Click "Create" to generate the sector
 * 
 * Dependencies:
 * - Foundry VTT with Ironsworn: Starforged system
 * - Required compendiums: Starforged Oracles (standard) or Starsmith Expanded Oracles (optional)
 * - Optional modules:
 *   - Token Attacher: For token attachment behavior
 *   - JB2A DnD5e: For animated passage effects
 *   - Sequencer: For sequencing passage animations
 *   - Starsmith Expanded Oracles: For expanded oracle tables
 * 
 * Version: 1.0.0
 * Author: David Hudson
 * License: MIT
 */

// Macro by David Hudson under the MIT License.
// ============================================================================
// VERSION
// ============================================================================

const MACRO_VERSION = "1.0.1";

// ============================================================================
// CONFIGURATION
// ============================================================================

const SECTOR_CONFIG = {
    // Module IDs
    MODULES: {
        TOKEN_ATTACHER: "token-attacher",
        JB2A_DND5E: "JB2A_DnD5e",
        SEQUENCER: "sequencer",
        STARSMITH_ORACLES: "starsmith-expanded-oracles",
    },

    // Roll Table Configuration
    ROLL_TABLES: {
        PREFIX: "Compendium.foundry-ironsworn.starforgedoracles.RollTable.",
        STARSMITH_PREFIX: "Compendium.starsmith-expanded-oracles.starsmithexpandedoracles.RollTable.",
        SECTOR_PREFIX: ["306501658d12dbad"],
        SECTOR_SUFFIX: ["0b2b7f507f8901cc"],
        STARSMITH_SECTOR_PREFIX: ["OBgw20hZhAlacN3n", "1qgTxhg1qpPATkiu", "vk6vBQsstREMx9AV"],
        STARSMITH_SECTOR_SUFFIX: ["KOB1e7oQ9qA5lZIB", "KGTJ4kSSkeyHxgZy", "MQFMTMilYVltbR0q"],
        SECTOR_TROUBLE: ["f6764b50761b77eb"],
        STARSMITH_SECTOR_TROUBLE: ["65Q1iiumixImppo3", "TOoNVdWtoACPc6uJ", "idw2Om2jWKCJtZ0F"],
        SETTLEMENT_NAME: ["c25eade4d8daa0bc"],
        STARSMITH_SETTLEMENT_NAME: ["G6mXIbtSkacs9660", "iZtujTpGpTw5tMO4", "ce7JLAwBAGqLYgHo"],
        SETTLEMENT_KLASS: "68efb47a93ee8925",
        AUTHORITY: ["2c3224921966f200"],
        STARSMITH_AUTHORITY: ["aI2wtdKOQvG0pZBY", "eKDmSpdyzwRM7ydc", "zMTlB0xQZyEc8PtQ"],
        SETTLEMENT_PROJECT: ["eb909255e1df463b"],
        STARSMITH_SETTLEMENT_PROJECT: ["iJbLrynKmB25yxKu", "wPh8ecvQZvyebiE0", "tNudiYQ7dnUpeONr"],
        PLANETARY_CLASS: ["affbef437e01ef10"],
        STELLAR_OBJECT: ["f2bba7a759c5871a"],
        FIRST_LOOK: ["5ff0f4816e9338b4"],
        STARSMITH_FIRST_LOOK: ["4mtNdMOiPAWeLe1P", "c6A4BvsaG6NOJdzf", "VWKvi551JyShfjh0"],
        SETTLEMENT_TROUBLE: ["b42abc2bc10cd38b"],
        STARSMITH_SETTLEMENT_TROUBLE: ["rd2ZCaZFUEhca5lp", "LpumgIbgDG8wRdso", "W6VGcvzStPUK4Yyc"],
        ACTION: ["b347a87fb81a3abb"],
        STARSMITH_ACTION: ["OSpHuphKhIOcJy6e", "EdMDbQ2rvj1kjsVw", "P2eGB9bEuZtwAQxq"],
        THEME: ["0c5ce82c7adbb4e2"],
        STARSMITH_THEME: ["mgGRUu62QCdo0n2Z", "cCXTQZgR8f8d0Ojq", "2KgRpUejv7U6Pjzf"],
        DESCRIPTOR: ["e2bae1632870e2d2"],
        STARSMITH_DESCRIPTOR: ["886Dxrj4VbhJWWH8", "8SO1JnHLK1F7sFwQ", "02ya1SPztxDlHmV0"],
        FOCUS: ["9d920a9da68abf62"],
        STARSMITH_FOCUS: ["zQO6QiD9dBseAj2n", "vLrIoBVbDBjNziuq", "s58V9HjgGqP3tmT2"],
        CHARACTER_ROLE: ["fbb49cabf7e9596c"],
        STARSMITH_CHARACTER_ROLE: ["O5x9KiSkoNAVXW6O", "VEL6LI4wBzI8eb7z", "437mrjVAePTQZGYv"],
        CHARACTER_FIRST_LOOK: ["e422399eb54ed7b1"],
        STARSMITH_CHARACTER_FIRST_LOOK: ["guv5iEDeLijYuABa", "oTECxhDPRJJ3yUvh", "MsQ7rPo2gDyVIQEE"],
        CHARACTER_GOAL: ["a707e132902305f0"],
        STARSMITH_CHARACTER_GOAL: ["2xxntLbzYGLZ2cao", "oLDINu3MLyDgABhD", "aqapGyFUQ1Jj9uQl"],
        REVEALED_CHARACTER_ASPECT: ["4c4b6c28ff08ad98"],
        STARSMITH_REVEALED_CHARACTER_ASPECT: ["5JUVkMmXuH74WBUv", "JhY6HtE1X1xSAJW5", "cFmnWNEUaw8Lf3Qg"],
        CHARACTER_GIVEN_NAME: ["2ac8af92c0509f72"],
        STARSMITH_CHARACTER_GIVEN_NAME: ["UnTcBB8gwFjNoT9O", "dXJhMhBt7J2FtCVh", "5acO6ocnsJerpEkI"],
        CHARACTER_FAMILY_NAME: ["f94e58504ac34af8"],
        STARSMITH_CHARACTER_FAMILY_NAME: ["6pv2fJdPmbl6HDGR", "v5XqY7qSbXRuBIDR", "lQR1PUQksmjUX2Fd"],
        CHARACTER_CALLSIGN: ["76cd6f5340a4978a"],
        STARSMITH_CHARACTER_CALLSIGN: ["0zs4jV8AgYw1GaVB", "iBgIwzZGGKTuCGpR", "vUTgxJRCAbApAZgi"],
    },

    // Region Settings
    REGIONS: {
        TERMINUS: {
            settlements: 4,
            passages: 3,
            populationOracle: "473250ed66f4c411",
        },
        OUTLANDS: {
            settlements: 3,
            passages: 2,
            populationOracle: "8d5220c3ac5a5199",
        },
        EXPANSE: {
            settlements: 2,
            passages: 1,
            populationOracle: "058fd93e957c6804",
        },
    },

    // Planetary Details Arrays by Class
    PLANET_TABLES: {
        desert: {
            name: ["d9ccce4a55cf1ba3"],
            atmosphere: ["f42af77272694d08"],
            observedFromSpace: ["ed4e3e57470dd927"],
            planetsideFeature: ["88fd2037f0802836"],
        },
        furnace: {
            name: ["0ab38c2349ec8e2b"],
            atmosphere: ["b7b9ee078847e834"],
            observedFromSpace: ["7083695541c913d9"],
            planetsideFeature: ["de35c746982df2bc"],
        },
        grave: {
            name: ["b39ab4b43d2df736"],
            atmosphere: ["c18d325e41207e90"],
            observedFromSpace: ["7520168fe11e73f4"],
            planetsideFeature: ["9eca6bc0a308c58f"],
        },
        ice: {
            name: ["f45c90ceb8432000"],
            atmosphere: ["c274f74ecf7ce593"],
            observedFromSpace: ["c56edfcd0c123ee3"],
            planetsideFeature: ["0370e0b345eeddb7"],
        },
        jovian: {
            name: ["fbb7cb653d8543a0"],
            atmosphere: ["32962e84047f17b5"],
            observedFromSpace: ["fc741bbc131b5a0b"],
            planetsideFeature: ["6a7ee7ca3f72a34f"],
        },
        jungle: {
            name: ["d231589442f1e296"],
            atmosphere: ["d5ac3f9b20d9f5dc"],
            observedFromSpace: ["3dfa3974fd38aa41"],
            planetsideFeature: ["315dd67fb3d71259"],
        },
        ocean: {
            name: ["3ab55ec64f9f711d"],
            atmosphere: ["8c593f0f2ac6527a"],
            observedFromSpace: ["efc010d3643bed54"],
            planetsideFeature: ["a36493cd810f2c37"],
        },
        rocky: {
            name: ["0aea1078fd7f3f1e"],
            atmosphere: ["5c0e2dc25a949b14"],
            observedFromSpace: ["e03b485571f904d3"],
            planetsideFeature: ["189900171ce9133f"],
        },
        shattered: {
            name: ["1bb3d31309da3f83"],
            atmosphere: ["00e404023a5dc5ba"],
            observedFromSpace: ["96bc7309f47d4af6"],
            planetsideFeature: ["1fdde544c04e021a"],
        },
        tainted: {
            name: ["ce83758fc30fecc5"],
            atmosphere: ["98cf03d0bdf9af1b"],
            observedFromSpace: ["b6761b93d9f1fc4d"],
            planetsideFeature: ["eeb02365a93c8965"],
        },
        vital: {
            name: ["9d429eda4f215791"],
            atmosphere: ["3b83c11a94c70b87"],
            observedFromSpace: ["88ca6ad4d5965c0b"],
            planetsideFeature: ["bcc68163e523f6c9"],
            diversity: ["2ccc456d0af8d199"],
            biomes: ["85e11dcd94c71ef2"],
        },
    },

    // Starsmith Planetary Details Arrays by Class
    STARSMITH_PLANET_TABLES: {
        shattered: {
            name_starsmith: ["0gKPLApYlwxPhSaE", "YV6Aysnedk3A7tfo", "kdHE1vWwFy5TRxqN"],
            observedFromSpace_starsmith: ["0ccW0eVajV4NENbZ", "fJV0agGCQh7hfzW8", "VD3Q2RTuFjSouslM"],
            planetsideFeature_starsmith: ["K74TKszI8T8HTUId", "XlUqt5BZzlHelXVu", "DsGW7fo4iF64qhWf"],
        },
        ice: {
            name_starsmith: ["JrTmSctB5pxFZJyb", "S04gzGykXCDArYhc", "m41bieZDQIJBVVbB"],
            observedFromSpace_starsmith: ["Uq1ybjzg3WVNH50Q", "fTHisJyGql8gcVuC", "2bbW8GapNrUbkBiD"],
            planetsideFeature_starsmith: ["3eZVI73pFd2Vq1Vn", "wUhTOw2fAMtUYXUn", "pma1szGfHplWS97Q"],
        },
        jovian: {
            name_starsmith: ["kqNvGwKvGSC0jmtx", "axzyF0OuGXwVzhmh", "6qKWL6r9sN5h4fHg"],
            observedFromSpace_starsmith: ["w5yprOoOTFfjZjZj", "Vh4sPOoSMhQK1Mvs", "TMaAUj4wwzIRZu5o"],
            planetsideFeature_starsmith: ["gV7Wxz4tmajgxe54", "yergAChxtcH7BcKf", "EqSN5ENCg0MqyoCP"],
        },
        vital: {
            name_starsmith: ["imKbV7dPHMQ4awnO", "eBsfgJ5xK9YNVxoB", "t4NRCKhjxiKFpELH"],
            observedFromSpace_starsmith: ["WF7PRchsM9oevTjM", "YdzwvZU2wgPhmQ7d", "UZEhVGNsNKw67juE"],
            planetsideFeature_starsmith: ["jhnjSjXc9PmfTMd4", "uE01iOVQTLPPTdoB", "nQyQUAuGZkemZtLh"],
        },
        desert: {
            name_starsmith: ["BdbEFPelmQqkGDxs", "a8S9E1HghcsyxTjX", "MVnD2orENFUEJrOU"],
            observedFromSpace_starsmith: ["Lfk0gDNUJecpYuRi", "60DIGlrsawAmJuYR", "wfVw6xyf8BY0Fmkw"],
            planetsideFeature_starsmith: ["EjrmKEYy4ESfBo7C", "UgIpgaYYzFkd424z", "bW8E38iRkmFPXJU8"],
        },
        tainted: {
            name_starsmith: ["y1kZTpBlrThTET3H", "ynZJHvrD1MSxw3N0", "QhVbCgtgVq1tBmPQ"],
            observedFromSpace_starsmith: ["WVdSiIWYWSpIUCTN", "cSZDLj0BqZDc4hbF", "0LirTYoCP3R8Dgzt"],
            planetsideFeature_starsmith: ["gxozVy6LZuhqjSeC", "mhrRDafdMmbZTMBq", "jtCNxmrr3miVoZvr"],
        },
        grave: {
            name_starsmith: ["0vFf0yYmD1Kdc9TC", "4Jqgfo9tNEmg6SiL", "O4WIISBXLxsJdOnU"],
            observedFromSpace_starsmith: ["BrE1gQtsBLvg9tSx", "vBC6s29505G4SVUW", "eCoLvpIQrVfmDUgO"],
            planetsideFeature_starsmith: ["6l5Hqitvc4RFxpra", "Lf2FvABUcYtgv6Ae", "2JAxDfpav0IlsZLK"],
        },
        furnace: {
            name_starsmith: ["XkWfdDGklRXgyoVW", "DZ27gXKmeNZvQBq8", "XiribiolFLhw9KcB"],
            observedFromSpace_starsmith: ["mXE7W7P7Vll5qPo4", "gLIiu5sGdkM62Ruo", "1sLkhxEaVUaPy57w"],
            planetsideFeature_starsmith: ["WIAW8H36hzbjshr0", "5esl8jSbsIyPkLZV", "zlAXlAtOLtqIPqvr"],
        },
        rocky: {
            name_starsmith: ["n1fQSqdBI1hcsq53", "IV7IsgbLgtpPJ0yp", "UDcY6Jp7nppzmlCI"],
            observedFromSpace_starsmith: ["N54KUtDcuuChzF3r", "aos2ItE40qIbg8aV", "wX7icUFXfjt33JHV"],
            planetsideFeature_starsmith: ["5R7eSgr0otB7ggVi", "AtmwcrDFmiL5KiZY", "ztBOckg0G5IMb5OX"],
        },
        ocean: {
            name_starsmith: ["HJcSLbX4pAVEhTms", "Pm2jNTRrEBT2xw8g", "pfwQG72bYwf6sxwt"],
            observedFromSpace_starsmith: ["vAi4oyM0iN9Xaku3", "jGM8ouMCAMH7a9Ac", "YFa3euIzF3Iu3EVs"],
            planetsideFeature_starsmith: ["raTeFRB4wM1tpaa6", "v9dpHyiCM0N18i0f", "p8ho6XAqC9ubRJLb"],
        },
        jungle: {
            name_starsmith: ["SMgvAe3GhveAOgOg", "rZ9zTYxHP3s4ejZ4", "ytmG9KxquuHDyL0s"],
            observedFromSpace_starsmith: ["9wCWNV5mg80zJCzz", "8NCFv7yLKaxIjARl", "nFaY8oF7Qg0yKzQn"],
            planetsideFeature_starsmith: ["vdR5AogzuYvRKWHo", "2uFx0KwWCty8dBMm", "FFmsU2Mxni5t0kAV"],
        },
    },

    // Folder Names
    FOLDERS: {
        SECTORS: "Sectors",
        SECTOR_DATA: "Sector Data",
        LOCATIONS: "Sector Locations",
    },

    // Scene Configuration
    SCENE: {
        GRID_SIZE: 170,
        INITIAL_SCALE: 0.386,
        INITIAL_X: 2428,
        INITIAL_Y: 1417,
        FOREGROUND_ELEVATION: 20,
        GRID_TYPE: 2,
        GRID_COLOR: "ffffff",
        GRID_ALPHA: 0.35,
        BACKGROUND_COLOR: "000000",
    },

    // Asset Paths
    ASSETS: {
        SECTORS_PATH: "systems/foundry-ironsworn/assets/sectors/1.webp",
        SETTLEMENT_BASE:
            "systems/foundry-ironsworn/assets/locations/settlement-",
        PLANET_BASE:
            "systems/foundry-ironsworn/assets/planets/Starforged-Planet-Token-",
        STELLAR_OBJECT_BASE:
            "systems/foundry-ironsworn/assets/stellar-objects/Starforged-Stellar-Token-",
        STELLAR_OBJECT_FALLBACK:
            "systems/foundry-ironsworn/assets/icons/stellar-object.svg",
    },

    // Token Scales
    TOKEN_SCALES: {
        SETTLEMENT: 2,
        PLANET: 1,
        STELLAR_OBJECT: 1,
    },

    // Hex Grid Configuration
    HEX_GRID: {
        SETTLEMENT_COL_SPACING: 24,
        PLANET_ROW_OFFSET: 1,
        MARKER_CORNER_BUFFER: 3, // Hexes from corner for marker placement
    },

    // Maximum Attempts Configuration
    MAX_ATTEMPTS: {
        ROLL_TWICE: 20,
        DUPLICATE_CHECK: 10,
        SETTLEMENT_PLACEMENT: 1000,
        PASSAGE_CREATION_MULTIPLIER: 10,
    },

    // Settlement Types
    SETTLEMENT_TYPES: {
        DEEP_SPACE: "deep space",
        ORBITAL: "orbital",
        PLANETSIDE: "planetside",
    },

    // Document Types
    DOCUMENT_TYPES: {
        ACTOR: "Actor",
        SCENE: "Scene",
        JOURNAL_ENTRY: "JournalEntry",
    },

    // Actor Types
    ACTOR_TYPES: {
        LOCATION: "location",
        FOE: "foe",
    },

    // Settlement Placement Configuration
    SETTLEMENT_DISTANCE: {
        MIN_FROM_EDGE: 4,
        MIN_FROM_OTHERS: 7,
    },

    // Debug Configuration
    DEBUG: false,

    // Stellar Object Types
    STELLAR_OBJECT_TYPES: [
        {
            value: "smoldering red star",
            imgKey: "Red-Star",
        },
        {
            value: "glowing orange star",
            imgKey: "Orange-Star",
        },
        {
            value: "burning yellow star",
            imgKey: "Yellow-Star",
        },
        {
            value: "blazing blue star",
            imgKey: "Blue-Star",
        },
        {
            value: "young star incubating in a molecular cloud",
            imgKey: "Star-In-Incubating-Cloud",
        },
        {
            value: "white dwarf shining with spectral light",
            imgKey: "White-Dwarf",
        },
        {
            value: "corrupted star radiating with unnatural light",
            imgKey: "Corrupted-Star",
        },
        {
            value: "neutron star surrounded by intense magnetic fields",
            imgKey: "Neutron-Star",
        },
        {
            value: "two stars in close orbit connected by fiery tendrils of energy",
            imgKey: "Binary-Star",
        },
        {
            value: "black hole allows nothing to escape—not even light",
            imgKey: "Black-Hole",
        },
        {
            value: "hypergiant star generating turbulent solar winds",
            imgKey: "Hypergiant",
        },
        {
            value: "artificial star constructed by a long-dead civilization",
            imgKey: null,
        },
        {
            value: "unstable star showing signs of impending supernova",
            imgKey: "Unstable-Star",
        },
    ],
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Returns a random item from an array
 * @param {Array} array - The array to select from
 * @returns {*} A random element from the array
 */
function randomArrayItem(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

/**
 * Returns a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Shuffles an array in place using Fisher-Yates algorithm
 * @param {Array} array - Array to shuffle
 * @returns {Array} The shuffled array (same reference)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Extracts a substring between two delimiters
 * @param {string} fullString - The full string to search
 * @param {string} startString - The starting delimiter
 * @param {string} endString - The ending delimiter
 * @returns {string|null} The extracted substring or null if not found
 */
function getStringBetween(fullString, startString, endString) {
    const startIndex = fullString.indexOf(startString);
    if (startIndex === -1) {
        return null;
    }

    const endIndex = fullString.indexOf(
        endString,
        startIndex + startString.length
    );
    if (endIndex === -1) {
        return null;
    }
    return fullString.substring(startIndex + startString.length, endIndex);
}

/**
 * Returns the list of stellar object types
 * @returns {Array} Array of stellar object type definitions
 */
function getStellarObjectTypes() {
    return SECTOR_CONFIG.STELLAR_OBJECT_TYPES;
}

/**
 * Processes a roll result that may contain "Action" and "Theme" placeholders
 * @param {TableRoller} tableRoller - Table roller instance
 * @param {string} text - Text that may contain "Action" and "Theme"
 * @returns {Promise<string>} Processed text with Action/Theme replaced
 */
async function processActionTheme(tableRoller, text) {
    if (text.includes("Action") && text.includes("Theme")) {
        // Check if using Starsmith tables based on tableRoller prefix
        const useStarsmith = tableRoller.prefix === SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX;
        
        const actionArray = useStarsmith
            ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_ACTION
            : SECTOR_CONFIG.ROLL_TABLES.ACTION;
        const actionRoll = await tableRoller.rollFromArray(actionArray);
        const action = tableRoller.getRollText(actionRoll);

        const themeArray = useStarsmith
            ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_THEME
            : SECTOR_CONFIG.ROLL_TABLES.THEME;
        const themeRoll = await tableRoller.rollFromArray(themeArray);
        const theme = tableRoller.getRollText(themeRoll);

        return `${action} ${theme}`;
    }
    return text;
}

/**
 * Processes a roll that may require rolling twice
 * @param {TableRoller} tableRoller - Table roller instance
 * @param {Array<string>} tableArray - Table UUID array to roll on
 * @param {string} initialText - Initial roll text
 * @returns {Promise<string>} Processed text (may be joined with <br>)
 */
async function processRollTwice(tableRoller, tableArray, initialText) {
    if (!initialText.toLowerCase().includes("roll twice")) {
        return await processActionTheme(tableRoller, initialText);
    }

    const results = [];
    let attempts = 0;
    const maxAttempts = SECTOR_CONFIG.MAX_ATTEMPTS.ROLL_TWICE;

    while (results.length < 2 && attempts < maxAttempts) {
        const roll = await tableRoller.rollFromArray(tableArray);
        let text = tableRoller.getRollText(roll);
        text = await processActionTheme(tableRoller, text);

        if (
            !text.toLowerCase().includes("roll twice") &&
            !results.includes(text)
        ) {
            results.push(text);
        }
        attempts++;
    }

    return results.join("<br>");
}

/**
 * Builds a UUID link string for an actor
 * @param {Actor} actor - The actor to build a link for
 * @returns {string} UUID link string in format @UUID[uuid]{name}
 */
function buildUuidLink(actor) {
    return `@UUID[${actor.uuid}]{${actor.name}}`;
}

/**
 * Validates that a value is not null, undefined, or empty
 * @param {*} value - Value to validate
 * @param {string} name - Name of the parameter for error messages
 * @throws {Error} If value is invalid
 */
function validateRequired(value, name) {
    if (value === null || value === undefined || value === "") {
        throw new Error(`${name} is required`);
    }
}

/**
 * Debug logging wrapper - only logs if DEBUG is enabled
 * @param {...any} args - Arguments to log
 */
function debugLog(...args) {
    if (SECTOR_CONFIG.DEBUG) {
        console.log(...args);
    }
}

/**
 * Gets the appropriate table array based on Starsmith setting
 * @param {boolean} useStarsmith - Whether to use Starsmith tables
 * @param {Array} standardArray - Standard table array
 * @param {Array} starsmithArray - Starsmith table array
 * @returns {Array} The appropriate table array
 */
function getTableArray(useStarsmith, standardArray, starsmithArray) {
    return useStarsmith ? starsmithArray : standardArray;
}

/**
 * Processes a roll result that may contain "Descriptor" and "Focus" placeholders
 * @param {TableRoller} tableRoller - Table roller instance
 * @param {string} text - Text that may contain "Descriptor" and "Focus"
 * @returns {Promise<string>} Processed text with Descriptor/Focus replaced
 */
async function processDescriptorFocus(tableRoller, text) {
    if (text.includes("Descriptor") && text.includes("Focus")) {
        // Check if using Starsmith tables based on tableRoller prefix
        const useStarsmith = tableRoller.prefix === SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX;
        
        const descriptorArray = useStarsmith
            ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_DESCRIPTOR
            : SECTOR_CONFIG.ROLL_TABLES.DESCRIPTOR;
        const descriptorRoll = await tableRoller.rollFromArray(descriptorArray);
        const descriptor = tableRoller.getRollText(descriptorRoll);

        const focusArray = useStarsmith
            ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_FOCUS
            : SECTOR_CONFIG.ROLL_TABLES.FOCUS;
        const focusRoll = await tableRoller.rollFromArray(focusArray);
        const focus = tableRoller.getRollText(focusRoll);

        return `${descriptor} ${focus}`;
    }
    return text;
}

// ============================================================================
// HELPER CLASSES
// ============================================================================

/**
 * Handles rolling on Foundry VTT roll tables with caching
 */
class TableRoller {
    /**
     * Creates a new TableRoller instance
     * @param {string} prefix - Prefix to append to UUID suffixes
     */
    constructor(prefix) {
        this.prefix = prefix;
        this.cache = new Map();
    }

    /**
     * Rolls a table by UUID
     * @param {string} uuid - Full UUID or suffix to append to prefix
     * @returns {Promise<Object>} The roll result
     * @throws {Error} If table is not found or roll fails
     */
    async rollTable(uuid) {
        try {
            const fullUuid = uuid.startsWith("Compendium.")
                ? uuid
                : this.prefix + uuid;

            // Check cache first
            if (this.cache.has(fullUuid)) {
                const table = this.cache.get(fullUuid);
                if (!table) {
                    throw new Error(`Table not found in cache: ${uuid}`);
                }
                return await table.roll();
            }

            const table = await fromUuid(fullUuid);
            if (!table) {
                throw new Error(
                    `Table not found: ${uuid} (full UUID: ${fullUuid})`
                );
            }
            this.cache.set(fullUuid, table);
            return await table.roll();
        } catch (error) {
            console.error(`Error rolling table ${uuid}:`, error);
            throw new Error(`Failed to roll table: ${uuid} - ${error.message}`);
        }
    }

    /**
     * Rolls a table from an array of UUIDs (randomly selects one)
     * @param {Array<string>} uuidArray - Array of UUID suffixes
     * @returns {Promise<Object>} The roll result
     * @throws {Error} If table is not found or roll fails
     */
    async rollFromArray(uuidArray) {
        const uuid = randomArrayItem(uuidArray);
        return await this.rollTable(uuid);
    }

    /**
     * Gets the text result from a roll
     * @param {Object} roll - The roll result
     * @returns {string} The text content
     */
    getRollText(roll) {
        return roll.results[0]?.text || "";
    }
}

/**
 * Manages folder creation and retrieval with memoization
 */
class FolderManager {
    /**
     * Creates a new FolderManager instance
     */
    constructor() {
        this.cache = new Map();
    }

    /**
     * Gets or creates a folder
     * @param {string} name - Folder name
     * @param {string} type - Folder type (Scene, JournalEntry, Actor)
     * @param {string|null} parentId - Parent folder ID (optional)
     * @returns {Promise<Folder>} The folder document
     */
    async getOrCreateFolder(name, type, parentId = null) {
        const cacheKey = `${name}:${type}:${parentId || ""}`;

        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        // Find folder by name and parent - search all folders to find one with matching name, type, and parent
        let folder = null;
        const foldersWithName = game.folders.filter(
            (f) => f.name === name && f.type === type
        );

        // Normalize parent ID for comparison
        let targetParentId = null;
        if (parentId) {
            // Extract ID if it's a folder object, otherwise use as string
            if (typeof parentId === "object" && parentId.id) {
                targetParentId = String(parentId.id);
            } else {
                targetParentId = String(parentId);
            }
        }

        // Find the folder with the correct parent (must be a direct child)
        for (const f of foldersWithName) {
            // Get the folder's parent ID - f.folder should be a string ID in Foundry
            let folderParentId = null;
            if (f.folder) {
                // Handle both string IDs and potential object references
                if (typeof f.folder === "string") {
                    folderParentId = f.folder;
                } else if (typeof f.folder === "object" && f.folder.id) {
                    folderParentId = String(f.folder.id);
                } else {
                    folderParentId = String(f.folder);
                }
            }

            // Compare parent IDs (both should be strings or both null)
            if (folderParentId === targetParentId) {
                folder = f;
                break;
            }
        }

        if (!folder) {
            // Safety check: ensure we're not creating a folder with the same name as its parent
            if (parentId) {
                const parentFolderId =
                    typeof parentId === "object" && parentId.id
                        ? parentId.id
                        : parentId;
                const parentFolder = game.folders.get(parentFolderId);
                if (parentFolder && parentFolder.name === name) {
                    console.warn(
                        `Warning: Attempted to create folder "${name}" inside parent folder with the same name. This may cause nesting issues.`
                    );
                }
            }

            const folderData = { name, type };
            if (parentId) {
                // Ensure we always pass the ID string, not a folder object
                folderData.folder =
                    typeof parentId === "object" && parentId.id
                        ? parentId.id
                        : parentId;
            }
            folder = await Folder.create(folderData);
        }

        this.cache.set(cacheKey, folder);
        return folder;
    }

    /**
     * Gets region-specific folders
     * @param {string} region - Region name
     * @returns {Promise<Object>} Object containing all region folders
     */
    async getRegionFolders(region) {
        const sectorsFolder = await this.getOrCreateFolder(
            SECTOR_CONFIG.FOLDERS.SECTORS,
            SECTOR_CONFIG.DOCUMENT_TYPES.SCENE
        );

        const sectorFolder = await this.getOrCreateFolder(
            region,
            SECTOR_CONFIG.DOCUMENT_TYPES.SCENE,
            sectorsFolder.id
        );

        const sectorDataFolder = await this.getOrCreateFolder(
            SECTOR_CONFIG.FOLDERS.SECTOR_DATA,
            SECTOR_CONFIG.DOCUMENT_TYPES.JOURNAL_ENTRY
        );

        const sectorDataRegionFolder = await this.getOrCreateFolder(
            region,
            SECTOR_CONFIG.DOCUMENT_TYPES.JOURNAL_ENTRY,
            sectorDataFolder.id
        );

        const locationsFolder = await this.getOrCreateFolder(
            SECTOR_CONFIG.FOLDERS.LOCATIONS,
            SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR
        );

        const locationsRegionFolder = await this.getOrCreateFolder(
            region,
            SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR,
            locationsFolder.id
        );

        return {
            sector: sectorFolder,
            sectorData: sectorDataRegionFolder,
            locations: locationsRegionFolder,
            locationsRoot: locationsFolder, // Top-level "Sector Locations" folder for shared resources
        };
    }
}

/**
 * Handles hex grid calculations and token positioning
 */
class TokenPlacer {
    /**
     * Creates a new TokenPlacer instance
     * @param {number} gridSize - Size of the hex grid in pixels
     */
    constructor(gridSize) {
        this.gridSize = gridSize;
        this.rowHeight = gridSize * (Math.sqrt(3) / 2);
        this.colWidth = gridSize;
    }

    /**
     * Converts pixel coordinates to hex coordinates (col, row)
     * @param {number} x - X pixel coordinate
     * @param {number} y - Y pixel coordinate
     * @returns {Object} Object with col, row hex coordinates
     */
    pixelToHex(x, y) {
        // Account for even row offset
        const row = Math.round(y / this.rowHeight);
        let col;

        if (row % 2 === 0) {
            // Even row: offset by half a column
            col = (x - this.colWidth / 2) / this.colWidth;
        } else {
            // Odd row: no offset
            col = x / this.colWidth;
        }

        return { col: Math.round(col), row };
    }

    /**
     * Converts offset hex coordinates to cube coordinates for distance calculation
     * @param {number} col - Column coordinate
     * @param {number} row - Row coordinate
     * @returns {Object} Object with x, y, z cube coordinates
     */
    offsetToCube(col, row) {
        // Convert offset coordinates (even rows offset) to cube coordinates
        // For even rows offset: x = col, z = row - (col + (col & 1)) / 2
        const x = col;
        const z = row - Math.floor((col + (col & 1)) / 2);
        const y = -x - z;
        return { x, y, z };
    }

    /**
     * Calculates hex distance between two positions
     * @param {number} x1 - First position x coordinate
     * @param {number} y1 - First position y coordinate
     * @param {number} x2 - Second position x coordinate
     * @param {number} y2 - Second position y coordinate
     * @returns {number} Hex distance between the two positions
     */
    hexDistance(x1, y1, x2, y2) {
        const hex1 = this.pixelToHex(x1, y1);
        const hex2 = this.pixelToHex(x2, y2);

        const cube1 = this.offsetToCube(hex1.col, hex1.row);
        const cube2 = this.offsetToCube(hex2.col, hex2.row);

        // Calculate distance using cube coordinates
        return (
            (Math.abs(cube1.x - cube2.x) +
                Math.abs(cube1.y - cube2.y) +
                Math.abs(cube1.z - cube2.z)) /
            2
        );
    }

    /**
     * Checks if a position is at least minDistance hexes from all edges
     * @param {number} col - Column coordinate
     * @param {number} row - Row coordinate
     * @param {number} sceneWidth - Scene width in pixels
     * @param {number} sceneHeight - Scene height in pixels
     * @param {number} minDistance - Minimum distance from edges in hexes
     * @returns {boolean} True if position is valid
     */
    isPositionAwayFromEdges(col, row, sceneWidth, sceneHeight, minDistance) {
        const maxRow = Math.floor(sceneHeight / this.rowHeight) - 1;
        const maxCol = Math.floor(sceneWidth / this.colWidth) - 1;

        return (
            row >= minDistance &&
            row <= maxRow - minDistance &&
            col >= minDistance &&
            col <= maxCol - minDistance
        );
    }

    /**
     * Divides the valid hex grid area into zones for even settlement distribution
     * @param {number} numZones - Number of zones to create
     * @param {number} minRow - Minimum valid row
     * @param {number} maxRowValid - Maximum valid row
     * @param {number} minCol - Minimum valid column
     * @param {number} maxColValid - Maximum valid column
     * @returns {Array<Object>} Array of zone definitions with {minRow, maxRow, minCol, maxCol}
     */
    divideIntoZones(numZones, minRow, maxRowValid, minCol, maxColValid) {
        const zones = [];
        const totalRows = maxRowValid - minRow + 1;
        const totalCols = maxColValid - minCol + 1;

        // Calculate grid dimensions for zones
        // Try to create a roughly square grid of zones
        const colsPerZone = Math.ceil(Math.sqrt(numZones));
        const rowsPerZone = Math.ceil(numZones / colsPerZone);

        // Calculate zone dimensions
        const zoneRows = Math.floor(totalRows / rowsPerZone);
        const zoneCols = Math.floor(totalCols / colsPerZone);
        const extraRows = totalRows % rowsPerZone;
        const extraCols = totalCols % colsPerZone;

        let zoneIndex = 0;
        let currentRow = minRow;

        for (let zoneRow = 0; zoneRow < rowsPerZone && zoneIndex < numZones; zoneRow++) {
            const rowsInThisZone = zoneRows + (zoneRow < extraRows ? 1 : 0);
            let currentCol = minCol;

            for (
                let zoneCol = 0;
                zoneCol < colsPerZone && zoneIndex < numZones;
                zoneCol++
            ) {
                const colsInThisZone = zoneCols + (zoneCol < extraCols ? 1 : 0);

                zones.push({
                    minRow: currentRow,
                    maxRow: currentRow + rowsInThisZone - 1,
                    minCol: currentCol,
                    maxCol: currentCol + colsInThisZone - 1,
                });

                currentCol += colsInThisZone;
                zoneIndex++;
            }

            currentRow += rowsInThisZone;
        }

        return zones;
    }

    /**
     * Finds a valid position within a zone
     * @param {Object} zone - Zone definition {minRow, maxRow, minCol, maxCol}
     * @param {Array<Object>} existingPositions - Array of existing positions {x, y}
     * @param {number} minDistanceFromOthers - Minimum hex distance from other settlements
     * @param {number} sceneWidth - Scene width in pixels
     * @param {number} sceneHeight - Scene height in pixels
     * @param {number} edgeBuffer - Minimum hexes from edge
     * @returns {Object|null} Valid position {col, row, x, y} or null if none found
     */
    findPositionInZone(
        zone,
        existingPositions,
        minDistanceFromOthers,
        sceneWidth,
        sceneHeight,
        edgeBuffer
    ) {
        // Generate all positions in the zone
        const candidatePositions = [];

        for (let row = zone.minRow; row <= zone.maxRow; row++) {
            for (let col = zone.minCol; col <= zone.maxCol; col++) {
                // Convert to pixel coordinates
                let x = col * this.colWidth;
                let y = row * this.rowHeight;

                // Offset for even rows
                if (row % 2 === 0) {
                    x += this.colWidth / 2;
                }

                // Check if position is away from edges
                if (
                    this.isPositionAwayFromEdges(
                        col,
                        row,
                        sceneWidth,
                        sceneHeight,
                        edgeBuffer
                    )
                ) {
                    candidatePositions.push({ col, row, x, y });
                }
            }
        }

        // Shuffle for randomness
        shuffleArray(candidatePositions);

        // Try each position until we find a valid one
        for (const pos of candidatePositions) {
            let isAwayFromOthers = true;

            if (existingPositions.length > 0) {
                for (const existingPos of existingPositions) {
                    const distance = this.hexDistance(
                        pos.x,
                        pos.y,
                        existingPos.x,
                        existingPos.y
                    );
                    if (distance < minDistanceFromOthers) {
                        isAwayFromOthers = false;
                        break;
                    }
                }
            }

            if (isAwayFromOthers) {
                return pos;
            }
        }

        // If no valid position in zone, return null
        return null;
    }

    /**
     * Calculates hex coordinates for a settlement
     * @param {number} index - Settlement index (0-based)
     * @param {number} totalSettlements - Total number of settlements
     * @param {number} sceneWidth - Scene width in pixels
     * @param {number} sceneHeight - Scene height in pixels
     * @param {Array<Object>} existingPositions - Array of existing settlement positions {x, y}
     * @param {number} minDistanceFromOthers - Minimum hex distance from other settlements
     * @returns {Object} Object with col, row, x, y coordinates
     */
    calculateSettlementPosition(
        index,
        totalSettlements,
        sceneWidth,
        sceneHeight,
        existingPositions = [],
        minDistanceFromOthers = SECTOR_CONFIG.SETTLEMENT_DISTANCE.MIN_FROM_OTHERS
    ) {
        const edgeBuffer = SECTOR_CONFIG.SETTLEMENT_DISTANCE.MIN_FROM_EDGE;
        const maxRow = Math.floor(sceneHeight / this.rowHeight) - 1;
        const maxCol = Math.floor(sceneWidth / this.colWidth) - 1;

        // Valid range for rows and columns (at least 4 hexes from edges)
        const minRow = edgeBuffer;
        const maxRowValid = maxRow - edgeBuffer;
        const minCol = edgeBuffer;
        const maxColValid = maxCol - edgeBuffer;

        // Divide scene into zones for even distribution
        const zones = this.divideIntoZones(
            totalSettlements,
            minRow,
            maxRowValid,
            minCol,
            maxColValid
        );
        const targetZone = zones[index];

        // Try to find position in target zone
        let position = this.findPositionInZone(
            targetZone,
            existingPositions,
            minDistanceFromOthers,
            sceneWidth,
            sceneHeight,
            edgeBuffer
        );

        // If no valid position in target zone, expand search to all zones
        if (!position) {
            // Try all zones in order (starting with target zone, then others)
            const zonesToTry = [
                targetZone,
                ...zones.filter((_, i) => i !== index),
            ];

            for (const zone of zonesToTry) {
                position = this.findPositionInZone(
                    zone,
                    existingPositions,
                    minDistanceFromOthers,
                    sceneWidth,
                    sceneHeight,
                    edgeBuffer
                );
                if (position) {
                    break;
                }
            }
        }

        // If still no position found, fall back to best available (closest to zone center)
        if (!position) {
            const zoneCenterRow = Math.floor(
                (targetZone.minRow + targetZone.maxRow) / 2
            );
            const zoneCenterCol = Math.floor(
                (targetZone.minCol + targetZone.maxCol) / 2
            );

            // Convert zone center to pixel coordinates
            let x = zoneCenterCol * this.colWidth;
            let y = zoneCenterRow * this.rowHeight;
            if (zoneCenterRow % 2 === 0) {
                x += this.colWidth / 2;
            }

            // Find position closest to zone center that's at least away from edges
            let bestPosition = null;
            let bestDistance = Infinity;

            for (let row = minRow; row <= maxRowValid; row++) {
                for (let col = minCol; col <= maxColValid; col++) {
                    if (
                        this.isPositionAwayFromEdges(
                            col,
                            row,
                            sceneWidth,
                            sceneHeight,
                            edgeBuffer
                        )
                    ) {
                        let testX = col * this.colWidth;
                        let testY = row * this.rowHeight;
                        if (row % 2 === 0) {
                            testX += this.colWidth / 2;
                        }

                        const distance = this.hexDistance(x, y, testX, testY);
                        if (distance < bestDistance) {
                            bestDistance = distance;
                            bestPosition = { col, row, x: testX, y: testY };
                        }
                    }
                }
            }

            position = bestPosition;

            if (!position) {
                debugLog(
                    `Could not find valid position for settlement ${
                        index + 1
                    }. Using fallback position.`
                );
                // Ultimate fallback: center of valid area
                const centerRow = Math.floor((minRow + maxRowValid) / 2);
                const centerCol = Math.floor((minCol + maxColValid) / 2);
                let fallbackX = centerCol * this.colWidth;
                let fallbackY = centerRow * this.rowHeight;
                if (centerRow % 2 === 0) {
                    fallbackX += this.colWidth / 2;
                }
                position = {
                    col: centerCol,
                    row: centerRow,
                    x: fallbackX,
                    y: fallbackY,
                };
            }
        }

        // Safety check: ensure we never return null
        if (!position) {
            debugLog(
                `Emergency fallback: Using zone center for settlement ${index + 1}`
            );
            const zoneCenterRow = Math.floor(
                (targetZone.minRow + targetZone.maxRow) / 2
            );
            const zoneCenterCol = Math.floor(
                (targetZone.minCol + targetZone.maxCol) / 2
            );
            // Clamp to valid bounds
            const finalRow = Math.max(minRow, Math.min(maxRowValid, zoneCenterRow));
            const finalCol = Math.max(minCol, Math.min(maxColValid, zoneCenterCol));
            let fallbackX = finalCol * this.colWidth;
            let fallbackY = finalRow * this.rowHeight;
            if (finalRow % 2 === 0) {
                fallbackX += this.colWidth / 2;
            }
            position = {
                col: finalCol,
                row: finalRow,
                x: fallbackX,
                y: fallbackY,
            };
        }

        return position;
    }

    /**
     * Calculates hex coordinates for a planet (below settlement)
     * @param {number} settlementCol - Settlement column (can be fractional)
     * @param {number} settlementRow - Settlement row
     * @returns {Object} Object with col, row, x, y coordinates
     */
    calculatePlanetPosition(settlementCol, settlementRow) {
        const targetHexRow =
            settlementRow + SECTOR_CONFIG.HEX_GRID.PLANET_ROW_OFFSET;
        let x = settlementCol * this.colWidth;
        let y = targetHexRow * this.rowHeight;

        // Offset for even rows
        if (targetHexRow % 2 === 0) {
            x -= this.colWidth / 2;
        }

        return { col: settlementCol, row: targetHexRow, x, y };
    }

    /**
     * Calculates hex coordinates one hex to the left of a given position
     * @param {number} x - Current x coordinate
     * @param {number} y - Current y coordinate
     * @returns {Object} Object with x, y coordinates for one hex to the left
     */
    calculateLeftHexPosition(x, y) {
        // In a hex grid, going one hex to the left (west) means subtracting colWidth
        const leftX = x - this.colWidth;
        return { x: leftX, y: y };
    }

    /**
     * Calculates hex coordinates one row up and one hex to the left of a given position
     * Mirrors the planet placement logic but moves up and left instead of down and left
     * @param {number} x - Current x coordinate
     * @param {number} y - Current y coordinate
     * @returns {Object} Object with x, y coordinates for position up and left
     */
    calculateUpLeftHexPosition(x, y) {
        // Convert pixel coordinates to hex coordinates
        const hex = this.pixelToHex(x, y);
        
        // Move up one row (decrease row by 1) and left one hex (decrease col by 1)
        const targetHexRow = hex.row - 1;
        const targetHexCol = hex.col - 1;
        
        // Calculate pixel coordinates
        let newX = targetHexCol * this.colWidth;
        let newY = targetHexRow * this.rowHeight;
        
        // Apply offset based on target row parity
        // Even rows have offset, odd rows don't
        if (targetHexRow % 2 === 0) {
            newX += this.colWidth / 2;
        }
        
        // Account for offset change when moving from even to odd row
        // When settlement is on even row (has offset) and connection is on odd row (no offset),
        // the connection ends up one hex too far left, so we need to add one hex width
        if (hex.row % 2 === 0 && targetHexRow % 2 !== 0) {
            // Moving from even (offset) to odd (no offset): add one hex width to correct position
            newX += this.colWidth;
        }
        
        return { x: newX, y: newY };
    }

    /**
     * Calculates marker positions on scene edges (inner edge)
     * @param {number} sceneWidth - Scene width
     * @param {number} sceneHeight - Scene height
     * @returns {Array<Object>} Array of marker positions with {x, y, edge} for each edge
     */
    calculateEdgeMarkerPositions(sceneWidth, sceneHeight) {
        const cornerBuffer = SECTOR_CONFIG.HEX_GRID.MARKER_CORNER_BUFFER;

        // Calculate max row and column based on scene dimensions
        const maxRow = Math.floor(sceneHeight / this.rowHeight) - 1;
        const maxCol = Math.floor(sceneWidth / this.colWidth) - 1;

        const markers = [];

        // Coreward (top edge) - targetHexRow = 0
        const targetHexRow = 0;
        const minCol = cornerBuffer;
        const maxColForTop = maxCol - cornerBuffer;
        const targetHexCol = getRandomInt(minCol, maxColForTop);

        let x = targetHexCol * this.colWidth;
        let y = targetHexRow * this.rowHeight;

        // Offset for even rows
        if (targetHexRow % 2 === 0) {
            x += this.colWidth / 2;
        }

        markers.push({ x, y, edge: "coreward" });

        // Rimward (bottom edge) - targetHexRow = max row
        const rimwardHexRow = maxRow;
        const minColForBottom = cornerBuffer;
        const maxColForBottom = maxCol - cornerBuffer;
        const rimwardHexCol = getRandomInt(minColForBottom, maxColForBottom);

        let rimwardX = rimwardHexCol * this.colWidth;
        let rimwardY = rimwardHexRow * this.rowHeight;

        // Offset for even rows
        if (rimwardHexRow % 2 === 0) {
            rimwardX += this.colWidth / 2;
        }

        markers.push({ x: rimwardX, y: rimwardY, edge: "rimward" });

        // Spinward (left edge) - targetHexCol = 0
        const targetHexColLeft = 0;
        const minRow = cornerBuffer;
        const maxRowForLeft = maxRow - cornerBuffer;
        const targetHexRowLeft = getRandomInt(minRow, maxRowForLeft);

        let spinwardX = targetHexColLeft * this.colWidth;
        let spinwardY = targetHexRowLeft * this.rowHeight;

        // Offset for even rows
        if (targetHexRowLeft % 2 === 0) {
            spinwardX += this.colWidth / 2;
        }

        markers.push({ x: spinwardX, y: spinwardY, edge: "spinward" });

        // Trailing (right edge) - targetHexCol = max col
        const trailingHexCol = maxCol;
        const minRowForRight = cornerBuffer;
        const maxRowForRight = maxRow - cornerBuffer;
        const trailingHexRow = getRandomInt(minRowForRight, maxRowForRight);

        let trailingX = trailingHexCol * this.colWidth;
        let trailingY = trailingHexRow * this.rowHeight;

        // Offset for even rows
        if (trailingHexRow % 2 === 0) {
            trailingX += this.colWidth / 2;
        }

        markers.push({ x: trailingX, y: trailingY, edge: "trailing" });

        return markers;
    }
}

/**
 * Generates locations (settlements, planets, stellar objects)
 */
class LocationGenerator {
    /**
     * Creates a new LocationGenerator instance
     * @param {TableRoller} tableRoller - Table roller instance for rolling on tables
     * @param {FolderManager} folderManager - Folder manager instance for folder operations
     */
    constructor(tableRoller, folderManager) {
        this.tableRoller = tableRoller;
        this.folderManager = folderManager;
    }

    /**
     * Creates a settlement actor
     * @param {string} name - Settlement name
     * @param {string} folderId - Folder ID for the settlement
     * @param {string} klass - Settlement class
     * @param {string} description - Settlement description
     * @returns {Promise<Actor>} The created settlement actor
     * @throws {Error} If actor creation fails
     */
    async createSettlement(name, folderId, klass, description) {
        try {
            const settlement = await CONFIG.IRONSWORN.actorClass.create({
                type: SECTOR_CONFIG.ACTOR_TYPES.LOCATION,
                name,
                folder: folderId,
                system: {
                    subtype: "settlement",
                    klass,
                    description,
                },
                img: `${SECTOR_CONFIG.ASSETS.SETTLEMENT_BASE}${klass.replace(
                    /\s+/g,
                    ""
                )}.webp`,
                prototypeToken: {
                    displayName: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
                    disposition: CONST.TOKEN_DISPOSITIONS.NEUTRAL,
                    actorLink: true,
                    "texture.scaleX": SECTOR_CONFIG.TOKEN_SCALES.SETTLEMENT,
                    "texture.scaleY": SECTOR_CONFIG.TOKEN_SCALES.SETTLEMENT,
                },
            });
            return settlement;
        } catch (error) {
            console.error(
                `Error creating settlement actor "${name}" in folder ${folderId}:`,
                error
            );
            throw error;
        }
    }

    /**
     * Creates a planet actor
     * @param {string} name - Planet name
     * @param {string} folderId - Folder ID for the planet
     * @param {string} klass - Planet class
     * @param {string} description - Planet description
     * @param {string} planetaryClass - Full planetary class name
     * @returns {Promise<Actor>} The created planet actor
     * @throws {Error} If actor creation fails
     */
    async createPlanet(name, folderId, klass, description, planetaryClass) {
        try {
            const planet = await CONFIG.IRONSWORN.actorClass.create({
                type: SECTOR_CONFIG.ACTOR_TYPES.LOCATION,
                name,
                folder: folderId,
                system: {
                    subtype: "planet",
                    klass,
                    description,
                },
                img: `${SECTOR_CONFIG.ASSETS.PLANET_BASE}${
                    planetaryClass.split(" ")[0]
                }-0${getRandomInt(1, 2)}.webp`,
                prototypeToken: {
                    displayName: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
                    disposition: CONST.TOKEN_DISPOSITIONS.NEUTRAL,
                    actorLink: true,
                    "texture.scaleX": SECTOR_CONFIG.TOKEN_SCALES.PLANET,
                    "texture.scaleY": SECTOR_CONFIG.TOKEN_SCALES.PLANET,
                },
            });
            return planet;
        } catch (error) {
            console.error(
                `Error creating planet actor "${name}" (${klass}) in folder ${folderId}:`,
                error
            );
            throw error;
        }
    }
}

// ============================================================================
// MAIN GENERATION FUNCTIONS
// ============================================================================

/**
 * Gets the configuration for a given region
 * @param {string} region - Region name (case-insensitive)
 * @returns {Object} Region configuration object with settlements, passages, and populationOracle
 */
function getRegionConfig(region) {
    const regionUpper = region.toUpperCase();
    const config = SECTOR_CONFIG.REGIONS[regionUpper];

    if (!config) {
        console.warn(
            `Unknown region "${region}", defaulting to Terminus. Valid regions: ${Object.keys(SECTOR_CONFIG.REGIONS).join(", ")}`
        );
        return SECTOR_CONFIG.REGIONS.TERMINUS;
    }

    return {
        ...config,
        populationOracle:
            SECTOR_CONFIG.ROLL_TABLES.PREFIX + config.populationOracle,
    };
}

/**
 * Creates a sector scene
 * @param {string} region - Region name
 * @param {string} sectorName - Sector name
 * @param {Folder} sectorFolder - Folder for the sector
 * @returns {Promise<Scene>} The created scene
 * @throws {Error} If no sector image files are found or scene creation fails
 */
async function createSectorScene(region, sectorName, sectorFolder) {
    // Early validation
    validateRequired(region, "region");
    validateRequired(sectorName, "sectorName");
    validateRequired(sectorFolder, "sectorFolder");

    try {
        const result = await FilePicker.browse(
            "data",
            SECTOR_CONFIG.ASSETS.SECTORS_PATH
        );

        if (result.files.length === 0) {
            throw new Error("No sector image files found");
        }

        const sceneData = [];
        for (const file of result.files) {
            const { width, height } = await loadTexture(file);
            sceneData.push({
                folder: sectorFolder.id,
                name: sectorName,
                fogExploration: false,
                "flags.foundry-ironsworn.region": region.toLowerCase(),
                tokenVision: false,
                navigation: false,
                "grid.type": SECTOR_CONFIG.SCENE.GRID_TYPE,
                "grid.color": SECTOR_CONFIG.SCENE.GRID_COLOR,
                "grid.alpha": SECTOR_CONFIG.SCENE.GRID_ALPHA,
                "grid.size": SECTOR_CONFIG.SCENE.GRID_SIZE,
                "background.src": file,
                backgroundColor: SECTOR_CONFIG.SCENE.BACKGROUND_COLOR,
                padding: 0,
                "initial.scale": SECTOR_CONFIG.SCENE.INITIAL_SCALE,
                "initial.x": SECTOR_CONFIG.SCENE.INITIAL_X,
                "initial.y": SECTOR_CONFIG.SCENE.INITIAL_Y,
                foregroundElevation: SECTOR_CONFIG.SCENE.FOREGROUND_ELEVATION,
                width,
                height,
            });
        }

        const scenes = await Scene.createDocuments(sceneData);
        debugLog("Created sector:", scenes[0].name);
        return scenes[0];
    } catch (error) {
        console.error(
            `Error creating sector scene "${sectorName}" for region ${region}:`,
            error
        );
        throw error;
    }
}

/**
 * Generates settlement description
 * @param {TableRoller} tableRoller - Table roller instance
 * @param {string} populationOracle - Population oracle UUID
 * @param {Array<string>} existingNames - Array of existing settlement names to avoid duplicates
 * @param {boolean} useStarsmithOracles - Whether to use Starsmith Expanded Oracles for settlement names
 * @returns {Promise<Object>} Settlement details
 */
async function generateSettlementDetails(tableRoller, populationOracle, existingNames = [], useStarsmithOracles = false) {
    let settlementName;
    let attempts = 0;
    const maxAttempts = SECTOR_CONFIG.MAX_ATTEMPTS.DUPLICATE_CHECK;
    
    // Use Starsmith oracles for settlement names if enabled
    const settlementNameArray = getTableArray(
        useStarsmithOracles,
        SECTOR_CONFIG.ROLL_TABLES.SETTLEMENT_NAME,
        SECTOR_CONFIG.ROLL_TABLES.STARSMITH_SETTLEMENT_NAME
    );
    
    // Create a TableRoller with the appropriate prefix for settlement names
    const settlementNameRoller = useStarsmithOracles
        ? new TableRoller(SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX)
        : tableRoller;
    
    // Re-roll until we get a unique name
    do {
        const nameRoll = await settlementNameRoller.rollFromArray(
            settlementNameArray
        );
        settlementName = settlementNameRoller.getRollText(nameRoll);
        attempts++;
        
        if (attempts >= maxAttempts) {
            debugLog(
                `Reached maximum attempts (${maxAttempts}) while generating unique settlement name. Using: ${settlementName}`
            );
            break;
        }
    } while (existingNames.includes(settlementName));

    const klassRoll = await tableRoller.rollTable(
        SECTOR_CONFIG.ROLL_TABLES.SETTLEMENT_KLASS
    );
    const settlementKlass = tableRoller.getRollText(klassRoll).toLowerCase();

    const populationRoll = await tableRoller.rollTable(populationOracle);
    const population = tableRoller.getRollText(populationRoll);

    // Use Starsmith oracles for authority if enabled
    const authorityArray = getTableArray(
        useStarsmithOracles,
        SECTOR_CONFIG.ROLL_TABLES.AUTHORITY,
        SECTOR_CONFIG.ROLL_TABLES.STARSMITH_AUTHORITY
    );
    
    const authorityRoll = await settlementNameRoller.rollFromArray(
        authorityArray
    );
    const authority = settlementNameRoller.getRollText(authorityRoll);

    // Use Starsmith oracles for settlement projects if enabled
    const projectArray = getTableArray(
        useStarsmithOracles,
        SECTOR_CONFIG.ROLL_TABLES.SETTLEMENT_PROJECT,
        SECTOR_CONFIG.ROLL_TABLES.STARSMITH_SETTLEMENT_PROJECT
    );
    
    // Use the appropriate TableRoller for projects
    const projectRoller = useStarsmithOracles
        ? settlementNameRoller
        : tableRoller;
    
    let settlementProject = "";
    const projectCount = getRandomInt(1, 2);
    for (let i = 0; i < projectCount; i++) {
        const projectRoll = await projectRoller.rollFromArray(
            projectArray
        );
        let projectText = projectRoller.getRollText(projectRoll);
        projectText = await processActionTheme(tableRoller, projectText);

        settlementProject += projectText + "<br>";
    }

    const description = `<p><strong>Population:</strong> ${population}</p>
        <p><strong>Authority:</strong> ${authority}</p>
        <p><strong>Settlement projects:</strong> ${settlementProject}</p>`;

    return {
        name: settlementName,
        klass: settlementKlass,
        description,
    };
}

/**
 * Generates planet details
 * @param {TableRoller} tableRoller - Table roller instance
 * @param {Array<string>} existingNames - Array of existing planet names to avoid duplicates
 * @param {boolean} useStarsmithOracles - Whether to use Starsmith Expanded Oracles for planet details
 * @returns {Promise<Object>} Planet details
 */
async function generatePlanetDetails(tableRoller, existingNames = [], useStarsmithOracles = false) {
    const classRoll = await tableRoller.rollFromArray(
        SECTOR_CONFIG.ROLL_TABLES.PLANETARY_CLASS
    );
    const rollText = tableRoller.getRollText(classRoll);

    const planetaryClass =
        getStringBetween(rollText, "</i>", "</a>")?.trim() || rollText.trim();
    const planetaryKlass = planetaryClass.split(" ")[0].toLowerCase();

    // Use Starsmith planet tables if enabled, otherwise use standard tables
    const planetTablesSource = useStarsmithOracles
        ? SECTOR_CONFIG.STARSMITH_PLANET_TABLES
        : SECTOR_CONFIG.PLANET_TABLES;
    
    const planetTables = planetTablesSource[planetaryKlass] || planetTablesSource.vital;

    if (!planetTables) {
        console.error(
            `No planet tables found for class "${planetaryKlass}" (from roll: ${rollText})`
        );
        return {
            name: "Unknown Planet",
            klass: planetaryKlass,
            class: planetaryClass,
        };
    }

    // Determine which name array to use based on Starsmith setting
    const nameArray = useStarsmithOracles
        ? planetTables.name_starsmith
        : planetTables.name;

    if (!nameArray) {
        console.error(
            `No name tables found for class "${planetaryKlass}" (from roll: ${rollText})`
        );
        return {
            name: "Unknown Planet",
            klass: planetaryKlass,
            class: planetaryClass,
        };
    }

    // Create a TableRoller with the appropriate prefix for planet names
    const planetNameRoller = useStarsmithOracles
        ? new TableRoller(SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX)
        : tableRoller;

    let planetaryName;
    let attempts = 0;
    const maxAttempts = SECTOR_CONFIG.MAX_ATTEMPTS.DUPLICATE_CHECK;
    
    // Re-roll until we get a unique name
    do {
        const nameRoll = await planetNameRoller.rollFromArray(nameArray);
        planetaryName = planetNameRoller.getRollText(nameRoll);
        attempts++;
        
        if (attempts >= maxAttempts) {
            debugLog(
                `Reached maximum attempts (${maxAttempts}) while generating unique planet name. Using: ${planetaryName}`
            );
            break;
        }
    } while (existingNames.includes(planetaryName));

    return {
        name: planetaryName,
        klass: planetaryKlass,
        class: planetaryClass,
    };
}

/**
 * Generates stellar object details
 * @param {TableRoller} tableRoller - Table roller instance
 * @param {string} settlementName - Settlement name for naming
 * @returns {Promise<Object>} Stellar object details
 */
async function generateStellarObjectDetails(tableRoller, settlementName) {
    const typeRoll = await tableRoller.rollFromArray(
        SECTOR_CONFIG.ROLL_TABLES.STELLAR_OBJECT
    );
    const stellarObjectTypeDescription = tableRoller.getRollText(typeRoll);

    const star = getStellarObjectTypes().find(
        (item) =>
            item.value.toLowerCase() ===
            stellarObjectTypeDescription.toLowerCase()
    );

    return {
        name: `${settlementName}'s Star`,
        klass: stellarObjectTypeDescription.toLowerCase(),
        imgKey: star?.imgKey || null,
    };
}

/**
 * Creates a stellar object actor
 * @param {string} name - Stellar object name
 * @param {string} folderId - Folder ID for the stellar object
 * @param {string} klass - Stellar object class
 * @param {string} description - Stellar object description
 * @param {string|null} imgKey - Image key for the stellar object
 * @returns {Promise<Actor>} The created stellar object actor
 * @throws {Error} If actor creation fails
 */
async function createStellarObject(name, folderId, klass, description, imgKey) {
    try {
        const img = imgKey
            ? `${SECTOR_CONFIG.ASSETS.STELLAR_OBJECT_BASE}${imgKey}-01.webp`
            : SECTOR_CONFIG.ASSETS.STELLAR_OBJECT_FALLBACK;

        const stellarObject = await CONFIG.IRONSWORN.actorClass.create({
            type: "location",
            name,
            folder: folderId,
            system: {
                subtype: "star",
                klass,
                description,
            },
            img,
            prototypeToken: {
                displayName: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
                disposition: CONST.TOKEN_DISPOSITIONS.NEUTRAL,
                actorLink: true,
                "texture.scaleX": SECTOR_CONFIG.TOKEN_SCALES.STELLAR_OBJECT,
                "texture.scaleY": SECTOR_CONFIG.TOKEN_SCALES.STELLAR_OBJECT,
            },
        });
        return stellarObject;
    } catch (error) {
        console.error(
            `Error creating stellar object "${name}" (${klass}) in folder ${folderId}:`,
            error
        );
        throw error;
    }
}

/**
 * Generates connection (foe) details
 * @param {TableRoller} tableRoller - Table roller instance
 * @param {boolean} useStarsmithOracles - Whether to use Starsmith Expanded Oracles for character details
 * @returns {Promise<Object>} Connection details
 */
async function generateConnectionDetails(tableRoller, useStarsmithOracles = false) {
    // Create a TableRoller with the appropriate prefix for character details
    const characterRoller = useStarsmithOracles
        ? new TableRoller(SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX)
        : tableRoller;
    
    // Determine which arrays to use based on Starsmith setting
    const givenNameArray = useStarsmithOracles
        ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_CHARACTER_GIVEN_NAME
        : SECTOR_CONFIG.ROLL_TABLES.CHARACTER_GIVEN_NAME;
    const familyNameArray = useStarsmithOracles
        ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_CHARACTER_FAMILY_NAME
        : SECTOR_CONFIG.ROLL_TABLES.CHARACTER_FAMILY_NAME;
    const callsignArray = useStarsmithOracles
        ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_CHARACTER_CALLSIGN
        : SECTOR_CONFIG.ROLL_TABLES.CHARACTER_CALLSIGN;
    const roleArray = useStarsmithOracles
        ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_CHARACTER_ROLE
        : SECTOR_CONFIG.ROLL_TABLES.CHARACTER_ROLE;
    const firstLookArray = useStarsmithOracles
        ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_CHARACTER_FIRST_LOOK
        : SECTOR_CONFIG.ROLL_TABLES.CHARACTER_FIRST_LOOK;
    const goalArray = useStarsmithOracles
        ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_CHARACTER_GOAL
        : SECTOR_CONFIG.ROLL_TABLES.CHARACTER_GOAL;
    const aspectArray = useStarsmithOracles
        ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_REVEALED_CHARACTER_ASPECT
        : SECTOR_CONFIG.ROLL_TABLES.REVEALED_CHARACTER_ASPECT;
    
    // Generate all three name types
    const givenNameRoll = await characterRoller.rollFromArray(givenNameArray);
    const givenName = characterRoller.getRollText(givenNameRoll);

    const familyNameRoll = await characterRoller.rollFromArray(familyNameArray);
    const familyName = characterRoller.getRollText(familyNameRoll);

    const callsignRoll = await characterRoller.rollFromArray(callsignArray);
    const callsign = characterRoller.getRollText(callsignRoll);

    // Concatenate name in format: "given_name family_name / callsign"
    const connectionName = `${givenName} ${familyName} (${callsign})`;

    // Roll for role
    const roleRoll = await characterRoller.rollFromArray(roleArray);
    const roleInitialText = characterRoller.getRollText(roleRoll);
    const role = await processRollTwice(
        characterRoller,
        roleArray,
        roleInitialText
    );

    // Roll for first look
    const firstLookRoll = await characterRoller.rollFromArray(firstLookArray);
    const firstLook = characterRoller.getRollText(firstLookRoll);

    // Roll for goal
    const goalRoll = await characterRoller.rollFromArray(goalArray);
    const goalInitialText = characterRoller.getRollText(goalRoll);
    const goal = await processRollTwice(
        characterRoller,
        goalArray,
        goalInitialText
    );

    // Roll for revealed aspect
    const aspectRoll = await characterRoller.rollFromArray(aspectArray);
    const aspect = characterRoller.getRollText(aspectRoll);

    return {
        name: connectionName,
        givenName,
        familyName,
        callsign,
        role,
        firstLook,
        goal,
        aspect,
    };
}

/**
 * Creates a connection (foe) actor
 * @param {string} name - Connection name
 * @param {string} folderId - Folder ID for the connection
 * @param {string} description - Connection description
 * @param {Object} [connectionDetails] - Optional connection details object with role, firstLook, goal, aspect
 * @returns {Promise<Actor>} The created connection actor
 * @throws {Error} If actor creation fails
 */
async function createConnection(name, folderId, description, connectionDetails = null) {
    try {
        const connection = await CONFIG.IRONSWORN.actorClass.create({
            type: SECTOR_CONFIG.ACTOR_TYPES.FOE,
            img: "icons/svg/mystery-man.svg",
            name,
            folder: folderId,
            system: {
                description,
            },
            prototypeToken: {
                name,
                displayName: CONST.TOKEN_DISPLAY_MODES.ALWAYS,
                disposition: CONST.TOKEN_DISPOSITIONS.NEUTRAL,
                actorLink: true,
                "texture.scaleX": SECTOR_CONFIG.TOKEN_SCALES.STELLAR_OBJECT,
                "texture.scaleY": SECTOR_CONFIG.TOKEN_SCALES.STELLAR_OBJECT,
                "texture.src": "icons/svg/mystery-man.svg",
            },
        });

        // Create progress track item for the connection
        try {
            // Build description from connection details for the progress track
            const progressTrackDescription = [];
            if (connectionDetails?.role) {
                progressTrackDescription.push(
                    `<p><strong>Role:</strong> ${connectionDetails.role}</p>`
                );
            }
            if (connectionDetails?.firstLook) {
                progressTrackDescription.push(
                    `<p><strong>First Look:</strong> ${connectionDetails.firstLook}</p>`
                );
            }
            if (connectionDetails?.goal) {
                progressTrackDescription.push(
                    `<p><strong>Goal:</strong> ${connectionDetails.goal}</p>`
                );
            }
            if (connectionDetails?.aspect) {
                progressTrackDescription.push(
                    `<p><strong>Revealed Aspect:</strong> ${connectionDetails.aspect}</p>`
                );
            }

            await connection.createEmbeddedDocuments("Item", [
                {
                    name: "Progress Track",
                    type: "progress",
                    img: "icons/svg/mystery-man.svg",
                    system: {
                        subtype: "connection",
                        description: progressTrackDescription.join("\n"),
                        rank: getRandomInt(1, 2),
                        current: 0,
                        completed: false,
                        starred: false,
                        hasTrack: true,
                        hasClock: false,
                        clockTicks: 0,
                        clockMax: 4,
                    },
                },
            ]);
        } catch (progressError) {
            console.warn(
                `Failed to create progress track for connection "${name}":`,
                progressError
            );
            // Continue - connection actor was created successfully
        }

        return connection;
    } catch (error) {
        console.error(
            `Error creating connection actor "${name}" in folder ${folderId}:`,
            error
        );
        throw error;
    }
}

/**
 * Creates a settlement with associated planet and stellar object
 * @param {Object} params - Parameters object
 * @param {number} params.index - Settlement index (0-based)
 * @param {number} params.totalSettlements - Total number of settlements
 * @param {TableRoller} params.tableRoller - Table roller instance
 * @param {LocationGenerator} params.locationGenerator - Location generator instance
 * @param {TokenPlacer} params.tokenPlacer - Token placer instance
 * @param {Scene} params.scene - Scene to place tokens on
 * @param {FolderManager} params.folderManager - Folder manager instance
 * @param {Folder} params.locationsSectorFolder - Sector-specific locations folder
 * @param {string} params.populationOracle - Population oracle UUID
 * @param {boolean} params.generateStars - Whether to generate stellar objects
 * @param {boolean} params.useTokenAttacher - Whether to use token attacher
 * @param {Array<Object>} [params.existingPositions] - Array of existing settlement positions
 * @returns {Promise<Object>} Created entities and UUIDs with position information
 * @returns {string} returns.description - Description string for journal
 * @returns {Actor} returns.settlement - Created settlement actor
 * @returns {TokenDocument} returns.settlementToken - Created settlement token
 * @returns {Object} returns.position - Position coordinates {x, y}
 * @throws {Error} If settlement creation fails
 */
async function createSettlementWithLocation(params) {
    // Early validation
    validateRequired(params, "params");
    validateRequired(params.tableRoller, "tableRoller");
    validateRequired(params.locationGenerator, "locationGenerator");
    validateRequired(params.tokenPlacer, "tokenPlacer");
    validateRequired(params.scene, "scene");
    validateRequired(params.folderManager, "folderManager");
    validateRequired(params.locationsSectorFolder, "locationsSectorFolder");
    validateRequired(params.populationOracle, "populationOracle");

    const {
        index,
        totalSettlements,
        tableRoller,
        locationGenerator,
        tokenPlacer,
        scene,
        folderManager,
        locationsSectorFolder,
        populationOracle,
        generateStars,
        useTokenAttacher,
        existingSettlementNames = [],
        existingPlanetNames = [],
    } = params;

    // Generate settlement details (with duplicate name checking)
    const settlementDetails = await generateSettlementDetails(
        tableRoller,
        populationOracle,
        existingSettlementNames,
        params.useStarsmithOracles || false
    );

    // Create a folder for this settlement
    const settlementFolder = await folderManager.getOrCreateFolder(
        settlementDetails.name,
        SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR,
        locationsSectorFolder.id
    );

    const settlement = await locationGenerator.createSettlement(
        settlementDetails.name,
        settlementFolder.id,
        settlementDetails.klass,
        settlementDetails.description
    );

    // Calculate settlement position
    const settlementPos = tokenPlacer.calculateSettlementPosition(
        index,
        totalSettlements,
        scene.width,
        scene.height,
        params.existingPositions || [],
        SECTOR_CONFIG.SETTLEMENT_DISTANCE.MIN_FROM_OTHERS
    );
    const tokenDataSettlement = await settlement.getTokenDocument();

    scene.activate();
    const tokenSettlement = await scene.createEmbeddedDocuments("Token", [
        {
            ...tokenDataSettlement.toObject(),
            x: settlementPos.x,
            y: settlementPos.y,
            sort: 2,
        },
    ]);

    const uuidSettlement = buildUuidLink(settlement);
    const conjunction =
        settlementDetails.klass === SECTOR_CONFIG.SETTLEMENT_TYPES.DEEP_SPACE
            ? "is a deep space settlement"
            : settlementDetails.klass === SECTOR_CONFIG.SETTLEMENT_TYPES.ORBITAL
            ? "is an orbital settlement of planet"
            : "is a planetside settlement on planet";

    let planet = null;
    let uuidPlanet = "";
    let uuidStellarObject = "";
    let planetDetails = null;

    // Create planet if not deep space
    if (settlementDetails.klass !== SECTOR_CONFIG.SETTLEMENT_TYPES.DEEP_SPACE) {
        planetDetails = await generatePlanetDetails(
            tableRoller,
            existingPlanetNames,
            params.useStarsmithOracles || false
        );
        const planetDescription = `<p><b>Settlement:</b> ${uuidSettlement}</p>`;

        planet = await locationGenerator.createPlanet(
            planetDetails.name,
            settlementFolder.id,
            planetDetails.klass,
            planetDescription,
            planetDetails.class
        );

        uuidPlanet = buildUuidLink(planet);

        // Update settlement with planet link
        settlement.system.description += `\n<p><b>Planet:</b> ${uuidPlanet}</p>`;
        await CONFIG.IRONSWORN.actorClass.updateDocuments([
            {
                _id: settlement._id,
                system: { description: settlement.system.description },
            },
        ]);

        // Place planet token
        const planetPos = tokenPlacer.calculatePlanetPosition(
            settlementPos.col,
            settlementPos.row
        );
        const tokenDataPlanet = await planet.getTokenDocument();

        debugLog(
            `Placing planet ${planet.name} at (x: ${planetPos.x}, y: ${planetPos.y})`
        );

        const tokenPlanet = await scene.createEmbeddedDocuments("Token", [
            {
                ...tokenDataPlanet.toObject(),
                x: planetPos.x,
                y: planetPos.y,
            },
        ]);

        // Attach tokens if requested
        if (
            useTokenAttacher &&
            game.modules.get(SECTOR_CONFIG.MODULES.TOKEN_ATTACHER)?.active
        ) {
            const targetTokenSettlement = canvas.tokens.get(
                tokenSettlement[0].id
            );
            const targetTokenPlanet = canvas.tokens.get(tokenPlanet[0].id);

            targetTokenPlanet.setTarget(true, {
                user: game.user,
                releaseOthers: true,
            });
            tokenAttacher.attachElementToToken(
                targetTokenPlanet,
                targetTokenSettlement
            );
            targetTokenPlanet.setTarget(false, {
                user: game.user,
                releaseOthers: true,
            });
        }
    }

    // Create stellar object if requested
    if (generateStars) {
        const stellarDetails = await generateStellarObjectDetails(
            tableRoller,
            settlementDetails.name
        );
        const stellarDescription =
            `<p><b>Settlement:</b> ${uuidSettlement}</p>` +
            (uuidPlanet ? `\n<p><b>Planet:</b> ${uuidPlanet}</p>` : "");

        const stellarObject = await createStellarObject(
            stellarDetails.name,
            settlementFolder.id,
            stellarDetails.klass,
            stellarDescription,
            stellarDetails.imgKey
        );

        uuidStellarObject = buildUuidLink(stellarObject);

        // Update settlement with star link
        settlement.system.description += `\n<p><b>Star:</b> ${uuidStellarObject}</p>`;
        await CONFIG.IRONSWORN.actorClass.updateDocuments([
            {
                _id: settlement._id,
                system: { description: settlement.system.description },
            },
        ]);

        // Update planet with star link if it exists
        if (planet) {
            planet.system.description += `\n<p><b>Star:</b> ${uuidStellarObject}</p>`;
            await CONFIG.IRONSWORN.actorClass.updateDocuments([
                {
                    _id: planet._id,
                    system: { description: planet.system.description },
                },
            ]);
        }
    }

    // Build description string for journal
    let description;
    if (settlementDetails.klass !== SECTOR_CONFIG.SETTLEMENT_TYPES.DEEP_SPACE) {
        description =
            `${uuidSettlement} ${conjunction} ${uuidPlanet}` +
            (generateStars
                ? ` in the ${uuidStellarObject} stellar system.`
                : ".");
    } else {
        description =
            `${uuidSettlement} ${conjunction}` +
            (generateStars
                ? ` in the ${uuidStellarObject} stellar system.`
                : ".");
    }

    return {
        description,
        settlement,
        settlementToken: tokenSettlement[0],
        position: { x: settlementPos.x, y: settlementPos.y },
        settlementName: settlementDetails.name,
        planetName: planetDetails ? planetDetails.name : null,
    };
}

/**
 * Generates all settlements for a sector
 * @param {Object} params - Parameters object
 * @returns {Promise<Object>} Object with descriptions array and settlements array
 */
async function generateSettlements(params) {
    // Early validation
    validateRequired(params, "params");
    validateRequired(params.numberOfSettlements, "numberOfSettlements");
    validateRequired(params.region, "region");
    validateRequired(params.sectorName, "sectorName");
    validateRequired(params.tableRoller, "tableRoller");
    validateRequired(params.locationGenerator, "locationGenerator");
    validateRequired(params.tokenPlacer, "tokenPlacer");
    validateRequired(params.scene, "scene");
    validateRequired(params.folderManager, "folderManager");
    validateRequired(params.populationOracle, "populationOracle");

    const {
        numberOfSettlements,
        region,
        sectorName,
        tableRoller,
        locationGenerator,
        tokenPlacer,
        scene,
        folderManager,
        populationOracle,
        generateStars,
        useTokenAttacher,
        useStarsmithOracles = false,
    } = params;

    const folders = await folderManager.getRegionFolders(region);
    const locationsSectorFolder = await folderManager.getOrCreateFolder(
        sectorName,
        SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR,
        folders.locations.id
    );

    const descriptions = [];
    const settlements = [];
    const settlementTokens = [];
    const existingPositions = []; // Track positions to ensure minimum distance
    const existingSettlementNames = []; // Track settlement names to prevent duplicates
    const existingPlanetNames = []; // Track planet names to prevent duplicates

    for (let i = 0; i < numberOfSettlements; i++) {
        try {
            const result = await createSettlementWithLocation({
                index: i,
                totalSettlements: numberOfSettlements,
                tableRoller,
                locationGenerator,
                tokenPlacer,
                scene,
                folderManager,
                locationsSectorFolder,
                populationOracle,
                generateStars,
                useTokenAttacher,
                existingPositions: existingPositions, // Pass existing positions
                existingSettlementNames: existingSettlementNames, // Pass existing settlement names
                existingPlanetNames: existingPlanetNames, // Pass existing planet names
                useStarsmithOracles: useStarsmithOracles, // Pass Starsmith oracles flag
            });
            descriptions.push(result.description);
            settlements.push(result.settlement);
            if (result.settlementToken) {
                settlementTokens.push(result.settlementToken);
            }
            // Add this settlement's position to the list for next iteration
            if (result.position) {
                existingPositions.push(result.position);
            }
            // Add settlement and planet names to prevent duplicates
            if (result.settlementName) {
                existingSettlementNames.push(result.settlementName);
            }
            if (result.planetName) {
                existingPlanetNames.push(result.planetName);
            }
        } catch (error) {
            console.error(
                `Error creating settlement ${i + 1} of ${numberOfSettlements} in ${region}:`,
                error
            );
            ui.notifications.error(
                `Failed to create settlement ${i + 1} of ${numberOfSettlements}`
            );
        }
    }

    return { descriptions, settlements, settlementTokens };
}

/**
 * Creates a sector journal entry
 * @param {string} sectorName - Sector name
 * @param {string} region - Region name
 * @param {string} sectorTrouble - Sector trouble description
 * @param {Array<string>} locationDescriptions - Array of location descriptions
 * @param {Folder} journalFolder - Folder for the journal
 * @param {Array<string>} [connectionDescriptions] - Optional array of connection descriptions
 * @returns {Promise<JournalEntry>} The created journal entry
 * @throws {Error} If journal creation fails
 */
async function createSectorJournal(
    sectorName,
    region,
    sectorTrouble,
    locationDescriptions,
    journalFolder,
    connectionDescriptions = []
) {
    // Early validation
    validateRequired(sectorName, "sectorName");
    validateRequired(region, "region");
    validateRequired(sectorTrouble, "sectorTrouble");
    validateRequired(locationDescriptions, "locationDescriptions");
    validateRequired(journalFolder, "journalFolder");

    try {
        const pages = [
            {
                name: "Overview",
                text: {
                    content: `${sectorName} is located in the ${region}.`,
                },
            },
            {
                name: "Sector Trouble",
                text: { content: `${sectorTrouble}.` },
            },
            {
                name: "Sector Locations",
                text: {
                    content:
                        locationDescriptions
                            .sort((a, b) =>
                                a.localeCompare(b, undefined, {
                                    sensitivity: "base",
                                })
                            )
                            .join("<br>") + `</p>`,
                },
            },
        ];

        // Add connections page if there are any connections
        if (connectionDescriptions.length > 0) {
            pages.push({
                name: "Connections",
                text: {
                    content:
                        connectionDescriptions
                            .sort((a, b) =>
                                a.localeCompare(b, undefined, {
                                    sensitivity: "base",
                                })
                            )
                            .join("<br>") + `</p>`,
                },
            });
        }

        const journal = await JournalEntry.create({
            name: sectorName,
            folder: journalFolder.id,
            pages,
        });
        return journal;
    } catch (error) {
        console.error(
            `Error creating sector journal "${sectorName}" in folder ${journalFolder?.id || "unknown"}:`,
            error
        );
        throw error;
    }
}

/**
 * Zooms in on a settlement (generates additional details)
 * Randomly selects a settlement and adds First Look, Settlement Trouble, and planet details
 * @param {TableRoller} tableRoller - Table roller instance
 * @param {Array<Actor>} settlements - Array of settlement actors to choose from
 * @param {boolean} useStarsmithOracles - Whether to use Starsmith Expanded Oracles for planet details
 * @throws {Error} If settlement processing fails or planet details cannot be updated
 */
async function zoomInOnASettlement(tableRoller, settlements, useStarsmithOracles = false) {
    try {
        if (!settlements?.length) {
            debugLog("No settlements available for zoom in");
            return;
        }

        // Choose a random settlement
        const randomSettlement = randomArrayItem(settlements);
        debugLog(`Zooming in on settlement: ${randomSettlement.name}`);

        // Roll on First Look table 1-2 times
        const firstLookCount = getRandomInt(1, 2);
        const firstLooks = [];
        
        // Determine which First Look array to use based on Starsmith setting
        const firstLookArray = getTableArray(
            useStarsmithOracles,
            SECTOR_CONFIG.ROLL_TABLES.FIRST_LOOK,
            SECTOR_CONFIG.ROLL_TABLES.STARSMITH_FIRST_LOOK
        );
        
        // Create a TableRoller with the appropriate prefix for First Look
        const firstLookRoller = useStarsmithOracles
            ? new TableRoller(SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX)
            : tableRoller;
        
        for (let i = 0; i < firstLookCount; i++) {
            let firstLook;
            let attempts = 0;
            const maxAttempts = SECTOR_CONFIG.MAX_ATTEMPTS.DUPLICATE_CHECK;

            do {
                const firstLookRoll = await firstLookRoller.rollFromArray(
                    firstLookArray
                );
                firstLook = firstLookRoller.getRollText(firstLookRoll);
                attempts++;

                // Check if result contains "Descriptor" and "Focus" - if so, roll on those tables
                firstLook = await processDescriptorFocus(firstLookRoller, firstLook);

                // If this is the second roll and it matches the first, re-roll
                if (
                    i === 1 &&
                    firstLook === firstLooks[0] &&
                    attempts < maxAttempts
                ) {
                    continue;
                }
                break;
            } while (attempts < maxAttempts);

            firstLooks.push(firstLook);
        }

        // Roll once on Settlement Trouble table
        // Determine which Settlement Trouble array to use based on Starsmith setting
        const troubleArray = getTableArray(
            useStarsmithOracles,
            SECTOR_CONFIG.ROLL_TABLES.SETTLEMENT_TROUBLE,
            SECTOR_CONFIG.ROLL_TABLES.STARSMITH_SETTLEMENT_TROUBLE
        );
        
        // Create a TableRoller with the appropriate prefix for Settlement Trouble
        const troubleRoller = useStarsmithOracles
            ? new TableRoller(SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX)
            : tableRoller;
        
        const troubleRoll = await troubleRoller.rollFromArray(
            troubleArray
        );
        let settlementTrouble = troubleRoller.getRollText(troubleRoll);
        settlementTrouble = await processActionTheme(troubleRoller, settlementTrouble);

        // Build the additional description text
        const additionalDescription = `
            <p><strong>First Look:</strong> ${firstLooks.join("<br>")}</p>
            <p><strong>Settlement Trouble:</strong> ${settlementTrouble}</p>
        `.trim();

        // If settlement is planetside or orbital, add planet details
        const settlementKlass = randomSettlement.system.klass;
        if (settlementKlass !== SECTOR_CONFIG.SETTLEMENT_TYPES.DEEP_SPACE) {
            // Extract planet UUID from settlement description (look for Planet: line)
            const planetUuidMatch = randomSettlement.system.description.match(
                /<b>Planet:<\/b>\s*@UUID\[([^\]]+)\]/
            );
            if (planetUuidMatch) {
                try {
                    const planet = await fromUuid(planetUuidMatch[1]);
                    if (planet && planet.system && planet.system.klass) {
                        const planetKlass = planet.system.klass.toLowerCase();
                        
                        // Use Starsmith planet tables if enabled, otherwise use standard tables
                        const planetTablesSource = useStarsmithOracles
                            ? SECTOR_CONFIG.STARSMITH_PLANET_TABLES
                            : SECTOR_CONFIG.PLANET_TABLES;
                        
                        const planetTables = planetTablesSource[planetKlass];

                        if (planetTables) {
                            // Create a TableRoller with the appropriate prefix for planet details
                            const planetDetailRoller = useStarsmithOracles
                                ? new TableRoller(SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX)
                                : tableRoller;
                            
                            // Determine which arrays to use based on Starsmith setting
                            const observedArray = useStarsmithOracles
                                ? planetTables.observedFromSpace_starsmith
                                : planetTables.observedFromSpace;
                            const featureArray = useStarsmithOracles
                                ? planetTables.planetsideFeature_starsmith
                                : planetTables.planetsideFeature;
                            
                            // Roll on Atmosphere table (once) - Atmosphere is always from standard tables
                            const atmosphereRoll =
                                await tableRoller.rollFromArray(
                                    SECTOR_CONFIG.PLANET_TABLES[planetKlass]?.atmosphere || []
                                );
                            const atmosphere =
                                tableRoller.getRollText(atmosphereRoll);

                            // Roll on Observed From Space table (1-2 times, no duplicates)
                            const observedCount = getRandomInt(1, 2);
                            const observedResults = [];
                            for (let i = 0; i < observedCount; i++) {
                                let observed;
                                let attempts = 0;
                                const maxAttempts = SECTOR_CONFIG.MAX_ATTEMPTS.DUPLICATE_CHECK;

                                do {
                                    const observedRoll =
                                        await planetDetailRoller.rollFromArray(
                                            observedArray
                                        );
                                    observed =
                                        planetDetailRoller.getRollText(observedRoll);
                                    
                                    // Check if result contains "Descriptor" and "Focus" - if so, roll on those tables
                                    observed = await processDescriptorFocus(planetDetailRoller, observed);
                                    
                                    attempts++;

                                    // If this is the second roll and it matches the first, re-roll
                                    if (
                                        i === 1 &&
                                        observed === observedResults[0] &&
                                        attempts < maxAttempts
                                    ) {
                                        continue;
                                    }
                                    break;
                                } while (attempts < maxAttempts);

                                observedResults.push(observed);
                            }

                            // Roll on Planetside Features table (1-2 times, no duplicates)
                            const featureCount = getRandomInt(1, 2);
                            const featureResults = [];
                            for (let i = 0; i < featureCount; i++) {
                                let feature;
                                let attempts = 0;
                                const maxAttempts = SECTOR_CONFIG.MAX_ATTEMPTS.DUPLICATE_CHECK;

                                do {
                                    const featureRoll =
                                        await planetDetailRoller.rollFromArray(
                                            featureArray
                                        );
                                    feature =
                                        planetDetailRoller.getRollText(featureRoll);
                                    
                                    // Check if result contains "Descriptor" and "Focus" - if so, roll on those tables
                                    feature = await processDescriptorFocus(planetDetailRoller, feature);
                                    
                                    attempts++;

                                    // If this is the second roll and it matches the first, re-roll
                                    if (
                                        i === 1 &&
                                        feature === featureResults[0] &&
                                        attempts < maxAttempts
                                    ) {
                                        continue;
                                    }
                                    break;
                                } while (attempts < maxAttempts);

                                featureResults.push(feature);
                            }

                            // Build additional planet description parts
                            const planetDescriptionParts = [
                                `<p><strong>Atmosphere:</strong> ${atmosphere}</p>`,
                                `<p><strong>Observed From Space:</strong> ${observedResults.join("<br>")}</p>`,
                                `<p><strong>Planetside Features:</strong> ${featureResults.join("<br>")}</p>`,
                            ];

                            // If the planet is "vital", roll on Diversity and Biomes tables and add those as well
                            // Note: Diversity and Biomes are always from standard tables (not Starsmith)
                            if (planetKlass === "vital") {
                                // Roll once on Diversity
                                let diversityStr = "";
                                let biomesStr = "";
                                
                                // Use standard PLANET_TABLES for diversity and biomes
                                const standardPlanetTables = SECTOR_CONFIG.PLANET_TABLES[planetKlass];

                                if (standardPlanetTables?.diversity) {
                                    const diversityRoll =
                                        await tableRoller.rollFromArray(
                                            standardPlanetTables.diversity
                                        );
                                    const diversity =
                                        tableRoller.getRollText(diversityRoll);
                                    diversityStr = diversity;
                                }

                                // Roll once on Biomes
                                if (standardPlanetTables?.biomes) {
                                    const biomesRoll =
                                        await tableRoller.rollFromArray(
                                            standardPlanetTables.biomes
                                        );
                                    const biomes =
                                        tableRoller.getRollText(biomesRoll);
                                    biomesStr = biomes;
                                }

                                planetDescriptionParts.push(
                                    `<p><strong>Diversity:</strong> ${diversityStr}</p>`,
                                    `<p><strong>Biomes:</strong> ${biomesStr}</p>`
                                );
                            }

                            const planetDescription = [
                                planet.system.description,
                                ...planetDescriptionParts,
                            ].join("\n");

                            // Update the planet's description
                            await CONFIG.IRONSWORN.actorClass.updateDocuments([
                                {
                                    _id: planet._id,
                                    system: { description: planetDescription },
                                },
                            ]);

                            debugLog(
                                `Updated planet ${
                                    planet.name
                                } with Atmosphere, Observed From Space, and Planetside Features${
                                    planetKlass === "vital"
                                        ? ", Diversity, Biomes"
                                        : ""
                                }`
                            );
                        }
                    }
                } catch (error) {
                    console.error(
                        `Error finding planet for settlement ${randomSettlement.name}:`,
                        error
                    );
                }
            }
        }

        // Update the settlement's description
        randomSettlement.system.description += "\n" + additionalDescription;
        await CONFIG.IRONSWORN.actorClass.updateDocuments([
            {
                _id: randomSettlement._id,
                system: { description: randomSettlement.system.description },
            },
        ]);

        debugLog(
            `Updated settlement ${randomSettlement.name} with First Look and Settlement Trouble details`
        );
    } catch (error) {
        console.error(
            `Error in zoomInOnASettlement with ${settlements?.length || 0} settlements:`,
            error
        );
        ui.notifications.warn("Failed to generate additional settlement details");
    }
}

/**
 * Finds the nearest marker token to a given settlement token
 * @param {TokenDocument} settlementToken - The settlement token to find nearest marker for
 * @param {Array} markerTokens - Array of marker token documents
 * @returns {TokenDocument|null} The nearest marker token, or null if none found
 */
function findNearestMarker(settlementToken, markerTokens) {
    if (!markerTokens?.length) {
        return null;
    }

    let nearestMarker = null;
    let minDistance = Infinity;

    for (const markerToken of markerTokens) {
        const dx = markerToken.x - settlementToken.x;
        const dy = markerToken.y - settlementToken.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < minDistance) {
            minDistance = distance;
            nearestMarker = markerToken;
        }
    }

    return nearestMarker;
}

/**
 * Creates animated passages between settlements and markers
 * @param {number} numberOfPassages - Number of passages to create
 * @param {Scene} scene - Scene to create passages on
 * @param {Array<TokenDocument>} settlementTokens - Array of settlement tokens
 * @param {Array<TokenDocument>} markerTokens - Array of marker tokens
 */
async function createPassageAnimations(
    numberOfPassages,
    scene,
    settlementTokens,
    markerTokens
) {
    if (
        game.modules.get(SECTOR_CONFIG.MODULES.JB2A_DND5E)?.active &&
        game.modules.get(SECTOR_CONFIG.MODULES.SEQUENCER)?.active
    ) {
        if (!settlementTokens?.length) {
            debugLog(
                "No settlement tokens available for passage animations"
            );
            return;
        }

        scene.activate();

        // Create one passage from a settlement to the nearest marker
        if (markerTokens && markerTokens.length > 0 && numberOfPassages > 0) {
            // Select a random settlement
            const sourceSettlementToken = randomArrayItem(settlementTokens);
            const nearestMarker = findNearestMarker(
                sourceSettlementToken,
                markerTokens
            );

            if (nearestMarker) {
                // Wait a brief moment for tokens to be rendered on canvas
                await new Promise((resolve) => setTimeout(resolve, 100));

                const canvasToken = canvas.tokens.get(sourceSettlementToken.id);
                const targetMarkerToken = canvas.tokens.get(nearestMarker.id);

                if (canvasToken && targetMarkerToken) {
                    new Sequence()
                        .effect()
                        .file("jb2a.energy_beam.normal.blue.01")
                        .attachTo(canvasToken)
                        .stretchTo(targetMarkerToken, { attachTo: true })
                        .persist()
                        .duration(1)
                        .scale({ x: 1.0, y: 0.3 })
                        .play();
                } else {
                    // Add warning for silent failure
                    debugLog(
                        `Could not create passage to marker: ` +
                            `sourceToken=${!!canvasToken}, markerToken=${!!targetMarkerToken}`
                    );
                }
            }
        }

        // Create remaining passages between settlements
        const remainingPassages = numberOfPassages - 1;

        // Only create passages between settlements if there are remaining passages to create
        if (remainingPassages > 0) {
            // Need at least 2 tokens to create passages between them
            if (settlementTokens.length < 2) {
                console.warn(
                    "Need at least 2 settlement tokens to create passages between settlements"
                );
                return;
            }

            // Track connected pairs to prevent duplicates (normalized: smaller ID first)
            const connectedPairs = new Set();

            /**
             * Creates a normalized pair key (smaller ID first) to treat A->B and B->A as the same
             * @param {string} id1 - First token ID
             * @param {string} id2 - Second token ID
             * @returns {string} Normalized pair key
             */
            function getPairKey(id1, id2) {
                return id1 < id2 ? `${id1}-${id2}` : `${id2}-${id1}`;
            }
            let attempts = 0;
            const maxAttempts = remainingPassages * SECTOR_CONFIG.MAX_ATTEMPTS.PASSAGE_CREATION_MULTIPLIER;

            for (
                let i = 0;
                i < remainingPassages && attempts < maxAttempts;
                attempts++
            ) {
                // Select a random settlement token as the source
                const sourceSettlementToken = randomArrayItem(settlementTokens);

                // Filter out the source token and select a different random token as the target
                const availableTargetTokens = settlementTokens.filter(
                    (token) => token.id !== sourceSettlementToken.id
                );

                if (availableTargetTokens.length === 0) {
                    debugLog(
                        "No available target tokens, skipping passage"
                    );
                    break;
                }

                const targetSettlementToken = randomArrayItem(
                    availableTargetTokens
                );

                // Check if this pair has already been connected
                const pairKey = getPairKey(
                    sourceSettlementToken.id,
                    targetSettlementToken.id
                );
                if (connectedPairs.has(pairKey)) {
                    // This pair is already connected, try again
                    continue;
                }

                // Get the actual token objects from canvas with retry
                let canvasToken = canvas.tokens.get(sourceSettlementToken.id);
                let targetToken = canvas.tokens.get(targetSettlementToken.id);

                // Retry once if tokens aren't found (race condition)
                if (!canvasToken || !targetToken) {
                    await new Promise((resolve) => setTimeout(resolve, 100));
                    canvasToken = canvas.tokens.get(sourceSettlementToken.id);
                    targetToken = canvas.tokens.get(targetSettlementToken.id);
                }

                if (!canvasToken) {
                    console.warn(
                        `Source token ${sourceSettlementToken.id} not found on canvas after retry`
                    );
                    continue;
                }

                if (!targetToken) {
                    console.warn(
                        `Target token ${targetSettlementToken.id} not found on canvas after retry`
                    );
                    continue;
                }

                // Mark this pair as connected
                connectedPairs.add(pairKey);

                new Sequence()
                    .effect()
                    .file("jb2a.energy_beam.normal.blue.01")
                    .attachTo(canvasToken)
                    .stretchTo(targetToken, { attachTo: true })
                    .persist()
                    .duration(1)
                    .scale({ x: 1.0, y: 0.3 })
                    .play();

                // Only increment i when we successfully create a passage
                i++;
            }

            if (attempts >= maxAttempts) {
                console.warn(
                    `Reached maximum attempts (${maxAttempts}) while creating passages. Created ${connectedPairs.size} unique passages.`
                );
            }
        }
    }
}

/**
 * Gets or creates marker actors and places their tokens on scene edges
 * Reuses existing marker actors from the "Navigation Markers" folder
 * @param {Scene} scene - Scene to create markers on
 * @param {TokenPlacer} tokenPlacer - Token placer instance for position calculations
 * @param {FolderManager} folderManager - Folder manager instance
 * @returns {Promise<Array<TokenDocument>>} Array of created marker tokens
 */
async function createMarkerTokens(
    scene,
    tokenPlacer,
    folderManager
) {
    // Initialize markerPositions to empty array to prevent undefined errors in catch block
    let markerPositions = [];
    
    try {
        scene.activate();

        // Calculate marker positions on edges
        markerPositions = tokenPlacer.calculateEdgeMarkerPositions(
            scene.width,
            scene.height
        );

        const edgeNames = {
            coreward: "Coreward",
            rimward: "Rimward",
            spinward: "Spinward",
            trailing: "Trailing",
        };

        // Get or create "Navigation Markers" folder at root level (same level as "Characters" and "Sector Locations")
        // This allows all regions (Terminus, Outlands, Expanse) to share the same marker actors
        const navigationMarkersFolder = await folderManager.getOrCreateFolder(
            "Navigation Markers",
            SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR
            // No parentId - creates at root level
        );

        // Get or create marker actors (reuse existing ones)
        const markerActors = [];
        for (let i = 0; i < markerPositions.length; i++) {
            const pos = markerPositions[i];
            const markerName = `${edgeNames[pos.edge]} Marker`;

            // Check if marker actor already exists
            let markerActor = game.actors.find(
                (actor) =>
                    actor.folder?.id === navigationMarkersFolder.id &&
                    actor.name === markerName &&
                    actor.type === SECTOR_CONFIG.ACTOR_TYPES.LOCATION
            );

            // Create marker actor if it doesn't exist
            if (!markerActor) {
                markerActor = await CONFIG.IRONSWORN.actorClass.create({
                    type: SECTOR_CONFIG.ACTOR_TYPES.LOCATION,
                    name: markerName,
                    folder: navigationMarkersFolder.id,
                    system: {
                        subtype: "marker",
                        description: `<p>Marker located on the ${pos.edge} edge of the sector.</p>`,
                    },
                    img: "modules/starforged-custom-oracles/assets/square.svg",
                    prototypeToken: {
                        displayName: CONST.TOKEN_DISPLAY_MODES.NONE,
                        disposition: CONST.TOKEN_DISPOSITIONS.NEUTRAL,
                        actorLink: true,
                        lockRotation: true,
                        rotation: 0,
                        alpha: 0,
                    },
                });
                debugLog(`Created new marker actor: ${markerName}`);
            } else {
                debugLog(`Reusing existing marker actor: ${markerName}`);
            }

            markerActors.push({ actor: markerActor, position: pos });
        }

        // Create token data for all markers
        const markerTokens = [];
        for (const { actor, position } of markerActors) {
            // Get token document from actor
            const tokenData = await actor.getTokenDocument();

            // Create token data
            markerTokens.push({
                ...tokenData.toObject(),
                x: position.x,
                y: position.y,
                sort: 0, // Place markers at the bottom of the sort order
            });
        }

        // Create all tokens at once
        const createdTokens = await scene.createEmbeddedDocuments(
            "Token",
            markerTokens
        );

        debugLog(
            `Placed ${markerPositions.length} marker tokens on scene edges`
        );

        return createdTokens;
    } catch (error) {
        console.error(
            `Error creating ${markerPositions.length} marker tokens for scene "${scene.name}":`,
            error
        );
        ui.notifications.warn(
            `Failed to create ${markerPositions.length} marker tokens for scene "${scene.name}"`
        );
        return [];
    }
}

/**
 * Main function to create a starting sector
 * Creates a complete sector with settlements, planets, stellar objects, passages, and journal entries
 * @param {string} region - Region name (Terminus, Outlands, or Expanse)
 * @param {boolean} startingSector - Whether this is a starting sector (adds connection and zoom-in details)
 * @param {boolean} useTokenAttacher - Whether to use token attacher module for token relationships
 * @param {boolean} createPassages - Whether to create passage animations between settlements
 * @param {boolean} generateStars - Whether to generate stellar objects for settlements
 * @param {boolean} useStarsmithOracles - Whether to use Starsmith Expanded Oracles for sector names
 * @throws {Error} If region is invalid or sector creation fails
 * @example
 * await buildStartingSector("Terminus", true, true, true, false, false);
 */
async function buildStartingSector(
    region,
    startingSector,
    useTokenAttacher,
    createPassages,
    generateStars,
    useStarsmithOracles = false
) {
    try {
        validateRequired(region, "region");
        // Initialize helpers
        const tableRoller = new TableRoller(SECTOR_CONFIG.ROLL_TABLES.PREFIX);
        const folderManager = new FolderManager();
        const tokenPlacer = new TokenPlacer(SECTOR_CONFIG.SCENE.GRID_SIZE);
        const locationGenerator = new LocationGenerator(
            tableRoller,
            folderManager
        );

        // Get region configuration
        const regionConfig = getRegionConfig(region);

        // Roll for sector name and trouble (parallel for better performance)
        // Use Starsmith oracles for sector names and trouble if enabled, otherwise use standard Starforged oracles
        const sectorNamePrefix = useStarsmithOracles
            ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_SECTOR_PREFIX
            : SECTOR_CONFIG.ROLL_TABLES.SECTOR_PREFIX;
        const sectorNameSuffix = useStarsmithOracles
            ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_SECTOR_SUFFIX
            : SECTOR_CONFIG.ROLL_TABLES.SECTOR_SUFFIX;
        const sectorTroubleArray = useStarsmithOracles
            ? SECTOR_CONFIG.ROLL_TABLES.STARSMITH_SECTOR_TROUBLE
            : SECTOR_CONFIG.ROLL_TABLES.SECTOR_TROUBLE;
        
        // Create a TableRoller with the appropriate prefix for sector names and trouble
        const sectorNameRoller = useStarsmithOracles
            ? new TableRoller(SECTOR_CONFIG.ROLL_TABLES.STARSMITH_PREFIX)
            : tableRoller;

        const [sectorPrefixRoll, sectorSuffixRoll, sectorTroubleRoll] =
            await Promise.all([
                sectorNameRoller.rollFromArray(sectorNamePrefix),
                sectorNameRoller.rollFromArray(sectorNameSuffix),
                sectorNameRoller.rollFromArray(sectorTroubleArray),
            ]);
        const sectorPrefix = sectorNameRoller.getRollText(sectorPrefixRoll);
        const sectorSuffix = sectorNameRoller.getRollText(sectorSuffixRoll);
        const sectorTrouble = sectorNameRoller.getRollText(sectorTroubleRoll);

        const sectorName = `${sectorPrefix} ${sectorSuffix}`;

        // Get folders
        const folders = await folderManager.getRegionFolders(region);

        // Create sector scene
        const scene = await createSectorScene(
            region,
            sectorName,
            folders.sector
        );

        // Get locations folder for settlements (sector-specific)
        const locationsSectorFolder = await folderManager.getOrCreateFolder(
            sectorName,
            SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR,
            folders.locations.id
        );

        // Create marker tokens on scene edges (reuses existing markers from root-level folder)
        const markerTokens = await createMarkerTokens(
            scene,
            tokenPlacer,
            folderManager
            // No parent folder needed - "Navigation Markers" is at root level
        );

        // Generate settlements
        const {
            descriptions: locationDescriptions,
            settlements,
            settlementTokens,
        } = await generateSettlements({
            numberOfSettlements: regionConfig.settlements,
            region,
            sectorName,
            tableRoller,
            locationGenerator,
            useStarsmithOracles: useStarsmithOracles,
            tokenPlacer,
            scene,
            folderManager,
            populationOracle: regionConfig.populationOracle,
            generateStars,
            useTokenAttacher,
        });

        // Check for token attacher module
        if (
            useTokenAttacher &&
            !game.modules.get(SECTOR_CONFIG.MODULES.TOKEN_ATTACHER)?.active
        ) {
            ui.notifications.info(
                `The module ${SECTOR_CONFIG.MODULES.TOKEN_ATTACHER} is not active.`
            );
        }

        // Track connections for journal entry
        const connectionDescriptions = [];

        // Create connection if starting sector
        if (startingSector && settlements.length > 0) {
            try {
                // Get a random settlement to associate the connection with
                const randomSettlement = randomArrayItem(settlements);
                const uuidSettlement = buildUuidLink(randomSettlement);

                // Generate connection details
                const connectionDetails = await generateConnectionDetails(
                    tableRoller,
                    useStarsmithOracles
                );

                // Build connection description
                const connectionDescription = `<p><b>Settlement:</b> ${uuidSettlement}</p>
                    <p><strong>Given Name:</strong> ${connectionDetails.givenName}</p>
                    <p><strong>Family Name:</strong> ${connectionDetails.familyName}</p>
                    <p><strong>Callsign:</strong> ${connectionDetails.callsign}</p>
                    <p><strong>Role:</strong> ${connectionDetails.role}</p>
                    <p><strong>First Look:</strong> ${connectionDetails.firstLook}</p>
                    <p><strong>Goal:</strong> ${connectionDetails.goal}</p>
                    <p><strong>Revealed Aspect:</strong> ${connectionDetails.aspect}</p>`;

                // Get or create characters folder structure: Characters > Region > Sector
                const charactersFolder = await folderManager.getOrCreateFolder(
                    "Characters",
                    SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR
                );
                const charactersRegionFolder =
                    await folderManager.getOrCreateFolder(
                        region,
                        SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR,
                        charactersFolder.id
                    );
                const charactersSectorFolder =
                    await folderManager.getOrCreateFolder(
                        sectorName,
                        SECTOR_CONFIG.DOCUMENT_TYPES.ACTOR,
                        charactersRegionFolder.id
                    );

                // Create connection actor
                const connection = await createConnection(
                    connectionDetails.name,
                    charactersSectorFolder.id,
                    connectionDescription,
                    connectionDetails
                );

                // Build UUID link for connection (used in multiple places)
                const uuidConnection = buildUuidLink(connection);

                // Place connection token on scene to the left of the settlement
                scene.activate();
                const settlementTokens = scene.tokens.filter(
                    (token) => token.actor?.id === randomSettlement.id
                );

                if (settlementTokens.length > 0) {
                    const settlementToken = settlementTokens[0];
                    const tokenDataConnection =
                        await connection.getTokenDocument();

                    // Calculate position one row up and one hex to the left
                    const connectionPos = tokenPlacer.calculateUpLeftHexPosition(
                        settlementToken.x,
                        settlementToken.y
                    );

                    await scene.createEmbeddedDocuments("Token", [
                        {
                            ...tokenDataConnection.toObject(),
                            x: connectionPos.x,
                            y: connectionPos.y,
                            sort: 3,
                        },
                    ]);

                    // Update settlement with connection link
                    randomSettlement.system.description += `\n<p><b>Connection:</b> ${uuidConnection}</p>`;
                    await CONFIG.IRONSWORN.actorClass.updateDocuments([
                        {
                            _id: randomSettlement._id,
                            system: {
                                description:
                                    randomSettlement.system.description,
                            },
                        },
                    ]);
                }

                // Add connection description to array for journal entry
                connectionDescriptions.push(
                    `${uuidConnection} is at ${uuidSettlement}.`
                );

                debugLog(
                    `Created connection ${connection.name} for settlement ${randomSettlement.name}`
                );
            } catch (error) {
                console.error(
                    `Error creating connection "${connection.name}" for settlement "${randomSettlement.name}":`,
                    error
                );
                ui.notifications.warn(
                    `Failed to create connection "${connectionDetails?.name || "unknown"}" for settlement "${randomSettlement.name}"`
                );
            }
        }

        // Create passages if requested
        if (createPassages) {
            await createPassageAnimations(
                regionConfig.passages,
                scene,
                settlementTokens,
                markerTokens
            );
        }

        // Zoom in on settlement if starting sector
        if (startingSector) {
            await zoomInOnASettlement(tableRoller, settlements, useStarsmithOracles);
        }

        // Create journal
        const journal = await createSectorJournal(
            sectorName,
            region,
            sectorTrouble,
            locationDescriptions,
            folders.sectorData,
            connectionDescriptions
        );

        // Link journal to scene
        await scene.update({ journal: journal.id });

        ui.notifications.info(`Successfully created sector: ${sectorName}`);
    } catch (error) {
        console.error("Error creating starting sector:", error);
        ui.notifications.error(`Failed to create sector: ${error.message || "Unknown error occurred"}`);
    }
}

// ============================================================================
// UI FUNCTIONS
// ============================================================================

/**
 * Gets an array of available region names from configuration
 * @returns {Array<string>} Array of region names
 */
function getAvailableRegions() {
    return Object.keys(SECTOR_CONFIG.REGIONS).map(
        (key) => key.charAt(0) + key.slice(1).toLowerCase()
    );
}

/**
 * Generates the HTML content for the sector creation dialog
 * @param {boolean} tokenAttacherActive - Whether Token Attacher module is active
 * @param {boolean} jb2aActive - Whether JB2A module is active
 * @param {boolean} sequencerActive - Whether Sequencer module is active
 * @param {boolean} starsmithOraclesActive - Whether Starsmith Expanded Oracles module is active
 * @param {string} regionOptions - HTML string of region options
 * @returns {string} HTML content for the dialog
 */
function generateDialogContent(
    tokenAttacherActive,
    jb2aActive,
    sequencerActive,
    starsmithOraclesActive,
    regionOptions
) {
    return `
        <form class="flexcol">
            <div class="form-group">
                <label for="selectRegion">Region</label>
                <select name="selectRegion">
                    ${regionOptions}
                </select>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="selectStartingSector" checked> Starting Sector</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="useTokenAttacher" ${
                    tokenAttacherActive ? "checked" : ""
                } ${
                    tokenAttacherActive ? "" : "disabled"
                }> Use Token Attacher${
                    !tokenAttacherActive ? " <span style='color: #888; font-size: 0.9em;'>(Token Attacher module not active)</span>" : ""
                }</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="createPassages" ${
                    jb2aActive && sequencerActive ? "checked" : ""
                } ${
                    jb2aActive && sequencerActive ? "" : "disabled"
                }> Create Passages${
                    !(jb2aActive && sequencerActive) ? " <span style='color: #888; font-size: 0.9em;'>(JB2A and Sequencer modules not active)</span>" : ""
                }</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="generateStars"> Generate Stars</label>
            </div>
            <div class="checkbox">
                <label><input type="checkbox" name="useStarsmithOracles" ${
                    starsmithOraclesActive ? "checked" : ""
                } ${
                    starsmithOraclesActive ? "" : "disabled"
                }> Include Starsmith Oracles${
                    !starsmithOraclesActive ? " <span style='color: #888; font-size: 0.9em;'>(Starsmith Expanded Oracles module not active)</span>" : ""
                }</label>
            </div>
        </form>
        `;
}

/**
 * Creates and shows the configuration dialog
 */
function showStartingSectorBuildDialog() {
    const tokenAttacherActive =
        game.modules.get(SECTOR_CONFIG.MODULES.TOKEN_ATTACHER)?.active || false;
    const jb2aActive =
        game.modules.get(SECTOR_CONFIG.MODULES.JB2A_DND5E)?.active || false;
    const sequencerActive =
        game.modules.get(SECTOR_CONFIG.MODULES.SEQUENCER)?.active || false;
    const starsmithOraclesActive =
        game.modules.get(SECTOR_CONFIG.MODULES.STARSMITH_ORACLES)?.active || false;

    const availableRegions = getAvailableRegions();
    const regionOptions = availableRegions
        .map((region) => `<option value="${region}">${region}</option>`)
        .join("\n                    ");

    let region = "";
    let startingSector = false;
    let useTokenAttacher = false;
    let createPassages = false;
    let generateStars = false;
    let useStarsmithOracles = false;
    let shouldCreate = false;

    const dialogContent = generateDialogContent(
        tokenAttacherActive,
        jb2aActive,
        sequencerActive,
        starsmithOraclesActive,
        regionOptions
    );

    new Dialog({
        title: "Select Region and Sector Type",
        content: dialogContent,
        buttons: {
            cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: "Cancel",
                callback: () => {
                    shouldCreate = false;
                },
            },
            create: {
                icon: '<i class="fas fa-check"></i>',
                label: "Create",
                callback: (html) => {
                    try {
                        region = html.find('[name="selectRegion"]').val();
                        startingSector = html
                            .find('[name="selectStartingSector"]')
                            .is(":checked");
                        useTokenAttacher = html
                            .find('[name="useTokenAttacher"]')
                            .is(":checked");
                        createPassages = html
                            .find('[name="createPassages"]')
                            .is(":checked");
                        generateStars = html
                            .find('[name="generateStars"]')
                            .is(":checked");
                        useStarsmithOracles = html
                            .find('[name="useStarsmithOracles"]')
                            .is(":checked");
                        shouldCreate = true;
                    } catch (error) {
                        console.error(
                            "Error reading dialog values from form:",
                            error
                        );
                        ui.notifications.error(
                            "Failed to read dialog values. Please try again."
                        );
                        shouldCreate = false;
                    }
                },
            },
        },
        default: "create",
        close: async () => {
            try {
                if (shouldCreate && region) {
                    // Validate region before proceeding
                    const validRegions = getAvailableRegions();
                    if (!validRegions.includes(region)) {
                        ui.notifications.error(
                            `Invalid region "${region}". Please select a valid region.`
                        );
                        console.error(
                            `Invalid region selected: "${region}". Valid regions: ${validRegions.join(", ")}`
                        );
                        return;
                    }

                    await buildStartingSector(
                        region,
                        startingSector,
                        useTokenAttacher,
                        createPassages,
                        generateStars,
                        useStarsmithOracles
                    );
                }
            } catch (error) {
                console.error(
                    `Error in dialog close callback for region "${region}":`,
                    error
                );
                ui.notifications.error(
                    `Failed to create sector: ${error.message || "Unknown error occurred"}`
                );
            }
        },
    }).render(true);
}

// ============================================================================
// ENTRY POINT
// ============================================================================

try {
    showStartingSectorBuildDialog();
} catch (error) {
    console.error("Error in sector creation macro:", error);
    ui.notifications.error("Failed to initialize sector creation dialog");
}
