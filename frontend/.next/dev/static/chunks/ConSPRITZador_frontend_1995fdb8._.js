(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/ConSPRITZador/frontend/lib/firebase.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
"use client";
;
;
;
// Firebase config using Next.js environment variables (NEXT_PUBLIC_ prefix required for frontend)
const firebaseConfig = {
    apiKey: "AIzaSyDZZyc8OzHbBRBBs2_8TDdYlps-IF9CFow",
    authDomain: "conspritzador.firebaseapp.com",
    projectId: "conspritzador",
    storageBucket: "conspritzador.firebasestorage.app",
    messagingSenderId: "642039998093",
    appId: "1:642039998093:web:c09682baf2f6f00a7da4c4",
    measurementId: "G-RQ26Y0RBTD"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BucharestMap3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * Harta 3D in stil ConQUIZtador: 15 teritorii extrudate, cu santuri intre ele,
 * camera inclinata, culori de jucator + emblema, sageata rosie pentru tinta curenta.
 *
 * Datele vin din /data/territories.json (generat de scripts/build_territories.py).
 * API-ul public ramane compatibil cu versiunea veche:
 *   onDistrictClick({ id, properties: { name, sector }, neighbors })
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/@react-three/fiber/dist/events-5a94e5eb.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/@react-three/drei/core/OrbitControls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/@react-three/drei/web/Html.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$useCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/@react-three/drei/web/useCursor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// ───────────────────────── constante de stil ─────────────────────────
const DEPTH = 0.32; // inaltimea placilor
const BEVEL = 0.05; // latimea santului dintre teritorii
const UNOWNED_TOP = '#efe2a8'; // crem, ca in captura
const UNOWNED_SIDE = '#8a6a3a';
// ───────────────────────── emblema ─────────────────────────
function Emblem({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "46",
        height: "46",
        viewBox: "0 0 48 48",
        style: {
            filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.55))'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                    id: "emb-g",
                    cx: "35%",
                    cy: "30%",
                    r: "80%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#fff3c4"
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#d9a73a"
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "22",
                fill: "url(#emb-g)",
                stroke: "#f7e08f",
                strokeWidth: "2.5"
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "24",
                cy: "24",
                r: "17.5",
                fill: "none",
                stroke: color,
                strokeWidth: "2",
                opacity: ".9"
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 33V21h4v-3h3v3h2v-7h6v7h2v-3h3v3h4v12z",
                fill: "#5a3a12"
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 33v-5a2 2 0 0 1 4 0v5z",
                fill: "#f3dc92"
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_c = Emblem;
function OwnerTag({ name, color, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            pointerEvents: 'none'
        },
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#fff',
                    textShadow: '0 1px 2px rgba(0,0,0,.9)',
                    whiteSpace: 'nowrap',
                    opacity: 0.95
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, this),
            name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#fff',
                    textShadow: '0 1px 2px rgba(0,0,0,.9), 0 0 4px rgba(0,0,0,.6)',
                    whiteSpace: 'nowrap'
                },
                children: name
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Emblem, {
                color: color
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 106,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_c1 = OwnerTag;
// ───────────────────────── sageata ─────────────────────────
function TargetArrow({ x, z }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "TargetArrow.useFrame": (state)=>{
            if (ref.current) {
                ref.current.position.y = DEPTH + 0.95 + Math.sin(state.clock.elapsedTime * 3) * 0.22;
            }
        }
    }["TargetArrow.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        position: [
            x,
            0,
            z
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
            ref: ref,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    rotation: [
                        Math.PI,
                        0,
                        0
                    ],
                    position: [
                        0,
                        -0.35,
                        0
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("coneGeometry", {
                            args: [
                                0.55,
                                0.9,
                                24
                            ]
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#c4452b",
                            roughness: 0.45,
                            metalness: 0.1
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                    position: [
                        0,
                        0.65,
                        0
                    ],
                    castShadow: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("cylinderGeometry", {
                            args: [
                                0.2,
                                0.2,
                                1.1,
                                20
                            ]
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                            color: "#d9583a",
                            roughness: 0.45,
                            metalness: 0.1
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_s(TargetArrow, "8QVLrcMdYxPUkj6ry5zpyt6J6X8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c2 = TargetArrow;
// ───────────────────────── un teritoriu ─────────────────────────
function Territory3D({ t, index, owner, isHovered, isSelected, onHover, onSelect }) {
    _s1();
    const lift = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const geometry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Territory3D.useMemo[geometry]": ()=>{
            const shape = new __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shape"](t.polygon.map({
                "Territory3D.useMemo[geometry]": ([x, y])=>new __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](x, y)
            }["Territory3D.useMemo[geometry]"]));
            return new __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtrudeGeometry"](shape, {
                depth: DEPTH,
                curveSegments: 1,
                bevelEnabled: true,
                bevelThickness: BEVEL,
                bevelSize: BEVEL,
                bevelOffset: -BEVEL,
                bevelSegments: 2
            });
        }
    }["Territory3D.useMemo[geometry]"], [
        t.polygon
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Territory3D.useEffect": ()=>({
                "Territory3D.useEffect": ()=>geometry.dispose()
            })["Territory3D.useEffect"]
    }["Territory3D.useEffect"], [
        geometry
    ]);
    const { top, side } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Territory3D.useMemo": ()=>{
            if (!owner) return {
                top: new __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](UNOWNED_TOP),
                side: new __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](UNOWNED_SIDE)
            };
            const base = new __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](owner.color);
            return {
                top: base.clone().lerp(new __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#ffffff'), 0.1),
                side: base.clone().multiplyScalar(0.5)
            };
        }
    }["Territory3D.useMemo"], [
        owner
    ]);
    // animatie de aparitie (placile "cresc" pe rand) + ridicare la hover/selectie
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Territory3D.useLayoutEffect": ()=>{
            if (lift.current) lift.current.position.y = -1.6;
        }
    }["Territory3D.useLayoutEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "Territory3D.useFrame": (state, delta)=>{
            const g = lift.current;
            if (!g) return;
            const appear = state.clock.elapsedTime - index * 0.07;
            const target = appear < 0 ? -1.6 : isSelected ? 0.3 : isHovered ? 0.14 : 0;
            g.position.y = __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].damp(g.position.y, target, 9, delta);
        }
    }["Territory3D.useFrame"]);
    const [lx, ly] = t.label;
    const showTag = !!owner || isHovered || isSelected;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: lift,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                geometry: geometry,
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                castShadow: true,
                receiveShadow: true,
                onPointerOver: (e)=>{
                    e.stopPropagation();
                    onHover(t.id);
                },
                onPointerOut: ()=>onHover(null),
                onClick: (e)=>{
                    if (e.delta > 4) return; // a fost drag (rotire camera), nu click
                    e.stopPropagation();
                    onSelect(t);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        attach: "material-0",
                        color: top,
                        emissive: top,
                        emissiveIntensity: isSelected ? 0.28 : isHovered ? 0.16 : 0.04,
                        roughness: 0.55,
                        metalness: 0.05
                    }, void 0, false, {
                        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meshStandardMaterial", {
                        attach: "material-1",
                        color: side,
                        roughness: 0.8
                    }, void 0, false, {
                        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                        lineNumber: 226,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            showTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$Html$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html"], {
                position: [
                    lx,
                    DEPTH + 0.35,
                    -ly
                ],
                center: true,
                distanceFactor: 15,
                zIndexRange: [
                    10,
                    0
                ],
                style: {
                    pointerEvents: 'none',
                    userSelect: 'none'
                },
                children: owner ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerTag, {
                    name: owner.name,
                    color: owner.color,
                    label: isHovered || isSelected ? t.name : undefined
                }, void 0, false, {
                    fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                    lineNumber: 238,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerTag, {
                    name: t.name
                }, void 0, false, {
                    fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                    lineNumber: 244,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
_s1(Territory3D, "X94qt+vF/wDhBry7YNF6jVpZOVA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$5a94e5eb$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c3 = Territory3D;
// ───────────────────────── scena ─────────────────────────
function Scene({ territories, selectedDistrict, targetDistrict, zones, playersData, onSelect }) {
    _s2();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$useCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCursor"])(!!hovered);
    const arrowTarget = territories.find((t)=>t.id === (targetDistrict ?? selectedDistrict));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hemisphereLight", {
                args: [
                    '#fff4d6',
                    '#3a2610',
                    0.95
                ]
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("directionalLight", {
                position: [
                    -9,
                    20,
                    12
                ],
                intensity: 1.7,
                castShadow: true,
                "shadow-mapSize-width": 2048,
                "shadow-mapSize-height": 2048,
                "shadow-camera-left": -16,
                "shadow-camera-right": 16,
                "shadow-camera-top": 16,
                "shadow-camera-bottom": -16,
                "shadow-camera-near": 1,
                "shadow-camera-far": 60,
                "shadow-bias": -0.0004
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mesh", {
                rotation: [
                    -Math.PI / 2,
                    0,
                    0
                ],
                position: [
                    0,
                    -BEVEL - 0.01,
                    0
                ],
                receiveShadow: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("planeGeometry", {
                        args: [
                            80,
                            80
                        ]
                    }, void 0, false, {
                        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shadowMaterial", {
                        opacity: 0.38
                    }, void 0, false, {
                        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            territories.map((t, i)=>{
                const ownerUid = zones[t.id];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Territory3D, {
                    t: t,
                    index: i,
                    owner: ownerUid ? playersData[ownerUid] : undefined,
                    isHovered: hovered === t.id,
                    isSelected: selectedDistrict === t.id,
                    onHover: setHovered,
                    onSelect: onSelect
                }, t.id, false, {
                    fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                    lineNumber: 301,
                    columnNumber: 11
                }, this);
            }),
            arrowTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TargetArrow, {
                x: arrowTarget.label[0],
                z: -arrowTarget.label[1]
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 314,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$OrbitControls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrbitControls"], {
                makeDefault: true,
                enablePan: false,
                enableDamping: true,
                dampingFactor: 0.08,
                minDistance: 20,
                maxDistance: 46,
                minPolarAngle: 0.35,
                maxPolarAngle: 1.2,
                minAzimuthAngle: -0.6,
                maxAzimuthAngle: 0.6,
                target: [
                    0,
                    0,
                    0
                ]
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 316,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s2(Scene, "2Y+Uv7TL+1GJDBRdXHEdQB1TD6k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$drei$2f$web$2f$useCursor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCursor"]
    ];
});
_c4 = Scene;
function BucharestMap3D({ dataUrl = '/data/territories.json', onDistrictClick, selectedDistrict, targetDistrict, zones = {}, playersData = {} }) {
    _s3();
    const [territories, setTerritories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BucharestMap3D.useEffect": ()=>{
            let cancelled = false;
            fetch(dataUrl).then({
                "BucharestMap3D.useEffect": (r)=>{
                    if (!r.ok) throw new Error(`HTTP ${r.status}`);
                    return r.json();
                }
            }["BucharestMap3D.useEffect"]).then({
                "BucharestMap3D.useEffect": (d)=>!cancelled && setTerritories(d.territories)
            }["BucharestMap3D.useEffect"]).catch({
                "BucharestMap3D.useEffect": (e)=>!cancelled && setError(String(e))
            }["BucharestMap3D.useEffect"]);
            return ({
                "BucharestMap3D.useEffect": ()=>{
                    cancelled = true;
                }
            })["BucharestMap3D.useEffect"];
        }
    }["BucharestMap3D.useEffect"], [
        dataUrl
    ]);
    const handleSelect = (t)=>onDistrictClick?.({
            id: t.id,
            properties: {
                name: t.name,
                sector: t.sector
            },
            neighbors: t.neighbors
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[600px] w-full overflow-hidden rounded-lg shadow-2xl",
        style: {
            background: 'radial-gradient(ellipse at 50% 38%, #7d5629 0%, #4b3117 48%, #1c1109 100%)'
        },
        children: [
            !territories && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center text-amber-100/80",
                children: "Se încarcă harta…"
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 369,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center text-red-300",
                children: [
                    "Nu s-a putut încărca harta (",
                    error,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 372,
                columnNumber: 9
            }, this),
            territories && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
                shadows: true,
                flat: true,
                dpr: [
                    1,
                    2
                ],
                camera: {
                    position: [
                        0,
                        27,
                        21
                    ],
                    fov: 32,
                    near: 0.5,
                    far: 200
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Scene, {
                    territories: territories,
                    selectedDistrict: selectedDistrict,
                    targetDistrict: targetDistrict,
                    zones: zones,
                    playersData: playersData,
                    onSelect: handleSelect
                }, void 0, false, {
                    fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                    lineNumber: 384,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 378,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0",
                style: {
                    boxShadow: 'inset 0 0 120px 30px rgba(0,0,0,.55)'
                }
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute bottom-3 left-3 rounded-md bg-black/45 px-3 py-1.5 text-xs text-amber-100/90 backdrop-blur-sm",
                children: "Drag: rotește · Scroll: zoom · Click: alege teritoriul"
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, this);
}
_s3(BucharestMap3D, "hm7XZ9mOURjcz9AdkVcZJYoQuGc=");
_c5 = BucharestMap3D;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "Emblem");
__turbopack_context__.k.register(_c1, "OwnerTag");
__turbopack_context__.k.register(_c2, "TargetArrow");
__turbopack_context__.k.register(_c3, "Territory3D");
__turbopack_context__.k.register(_c4, "Scene");
__turbopack_context__.k.register(_c5, "BucharestMap3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/lib/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$components$2f$BucharestMap3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// game layout
"use client";
;
;
;
;
;
function GamePage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const roomCode = params.roomCode;
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentUserUid, setCurrentUserUid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedDistrict, setSelectedDistrict] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // obtinere user curent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            const unsubscribeAuth = __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].onAuthStateChanged({
                "GamePage.useEffect.unsubscribeAuth": (user)=>{
                    if (user) {
                        setCurrentUserUid(user.uid);
                    }
                }
            }["GamePage.useEffect.unsubscribeAuth"]);
            return ({
                "GamePage.useEffect": ()=>unsubscribeAuth()
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], []);
    // updateurile in timp real prin firebase
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            if (!roomCode) return;
            const gameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode);
            const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(gameRef, {
                "GamePage.useEffect.unsubscribe": (docSnap)=>{
                    if (docSnap.exists()) {
                        const data = docSnap.data();
                        setGameState(data);
                        setLoading(false);
                    } else {
                        console.error("Game room not found!");
                        setLoading(false);
                    }
                }
            }["GamePage.useEffect.unsubscribe"]);
            return ({
                "GamePage.useEffect": ()=>unsubscribe()
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], [
        roomCode
    ]);
    // handler pentru click pe district
    const handleDistrictClick = async (district)=>{
        // Extrage numele districtului - poate fi în properties.tags.name sau properties.name
        const districtName = district?.properties?.tags?.name || district?.properties?.name;
        if (!gameState || !currentUserUid || !districtName) {
            console.log('Missing gameState, user, or district name');
            return;
        }
        // verificam daca districtul e deja luat
        if (gameState.zones[districtName]) {
            console.log("District already claimed!");
            return;
        }
        // randul jucatorului curent
        if (gameState.currentTurn !== currentUserUid) {
            console.log("Not your turn!");
            return;
        }
        setSelectedDistrict(districtName);
        try {
            const gameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode);
            // update district din firebase
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(gameRef, {
                [`zones.${districtName}`]: currentUserUid,
                currentTurn: getNextPlayerUid(gameState, currentUserUid),
                [`players.${currentUserUid}.score`]: (gameState.players[currentUserUid]?.score || 0) + 100
            });
        } catch (err) {
            console.error("Failed to claim district:", err);
        }
    };
    // helper pentru next player
    const getNextPlayerUid = (state, currentUid)=>{
        const playerUids = Object.keys(state.players);
        const currentIndex = playerUids.indexOf(currentUid);
        const nextIndex = (currentIndex + 1) % playerUids.length;
        return playerUids[nextIndex];
    };
    // obtinere jucatori pentru harta
    const getPlayersForMap = ()=>{
        if (!gameState) return [];
        return Object.values(gameState.players).map((player)=>({
                id: player.uid,
                name: player.name,
                position: [
                    44.4268 + (Math.random() * 0.02 - 0.01),
                    26.1025 + (Math.random() * 0.02 - 0.01)
                ]
            }));
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-xl",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    }
    if (!gameState) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-400 text-xl",
                children: "Game not found"
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this);
    }
    const currentPlayer = gameState.players[currentUserUid];
    const isMyTurn = gameState.currentTurn === currentUserUid;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "flex flex-col md:flex-row justify-between items-center mb-6 p-6 bg-gray-800/50 rounded-2xl backdrop-blur-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
                                    children: "ConSPRITZador"
                                }, void 0, false, {
                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 mt-1",
                                    children: [
                                        "Room: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-mono text-cyan-300",
                                            children: roomCode
                                        }, void 0, false, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-4 mt-4 md:mt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-700/70 px-6 py-3 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-cyan-300 text-sm",
                                            children: "YOUR SCORE"
                                        }, void 0, false, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold",
                                            children: currentPlayer?.score || 0
                                        }, void 0, false, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `px-6 py-3 rounded-xl ${isMyTurn ? 'bg-green-600/70' : 'bg-red-600/70'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm",
                                            children: "TURN STATUS"
                                        }, void 0, false, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold",
                                            children: isMyTurn ? 'YOUR TURN!' : 'WAITING FOR YOUR TURN'
                                        }, void 0, false, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$components$2f$BucharestMap3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onDistrictClick: handleDistrictClick,
                                selectedDistrict: selectedDistrict,
                                players: getPlayersForMap(),
                                zones: gameState.zones || {},
                                playersData: Object.fromEntries(Object.entries(gameState.players || {}).map(([uid, player])=>[
                                        uid,
                                        {
                                            color: player.color || '#4d96ff',
                                            name: player.name || 'Player'
                                        }
                                    ]))
                            }, void 0, false, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-800/70 backdrop-blur-sm p-6 rounded-2xl border border-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold mb-4 flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cyan-400 mr-2",
                                                    children: "👥"
                                                }, void 0, false, {
                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 17
                                                }, this),
                                                "Jucători în Cameră (",
                                                Object.keys(gameState.players).length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: Object.entries(gameState.players || {}).map(([uid, player])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex justify-between items-center p-3 rounded-lg ${uid === currentUserUid ? 'bg-cyan-900/40 border border-cyan-700' : 'bg-gray-700/50'} ${gameState.currentTurn === uid ? 'ring-2 ring-yellow-400' : ''}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-3 h-3 rounded-full",
                                                                    style: {
                                                                        backgroundColor: player.color || '#4d96ff'
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: uid === currentUserUid ? 'font-bold' : '',
                                                                    children: [
                                                                        player.name || "Jucător",
                                                                        " ",
                                                                        uid === currentUserUid && '(Tu)'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                                    lineNumber: 215,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold",
                                                            children: [
                                                                player.score || 0,
                                                                " pts"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, uid, true, {
                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 198,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-800/70 p-6 rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold mb-4",
                                            children: "SELECTED DISTRICT"
                                        }, void 0, false, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 227,
                                            columnNumber: 15
                                        }, this),
                                        selectedDistrict ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-pulse",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold text-cyan-300 mb-2",
                                                    children: selectedDistrict
                                                }, void 0, false, {
                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-cyan-900/30 p-4 rounded-lg mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold mb-2",
                                                            children: "Întrebare:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                            lineNumber: 234,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-lg",
                                                            children: '"Cine a fost primul primar al acestui district?"'
                                                        }, void 0, false, {
                                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                            lineNumber: 235,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition",
                                                            children: "Varianta A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-full bg-blue-600 hover:bg-blue-700 p-3 rounded-lg transition",
                                                            children: "Varianta B"
                                                        }, void 0, false, {
                                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center py-8",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-5xl mb-4",
                                                    children: "🗺️"
                                                }, void 0, false, {
                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 italic",
                                                    children: "Click to a district on the map to claim it!"
                                                }, void 0, false, {
                                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-purple-900/50 to-blue-900/50 p-6 rounded-2xl text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold mb-2",
                                            children: "⏱️ 00:45"
                                        }, void 0, false, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-300 mb-4",
                                            children: [
                                                "remaining time for round ",
                                                gameState.round || 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-bold",
                                            children: [
                                                "ROUND: ",
                                                gameState.round || 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 bg-gray-800/50 p-6 rounded-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold mb-4",
                            children: "💬 Chat & Log Joc"
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-32 overflow-y-auto bg-gray-900/50 p-4 rounded-lg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm",
                                children: [
                                    currentPlayer?.name || "Player",
                                    " entered the room.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                        lineNumber: 272,
                                        columnNumber: 66
                                    }, this),
                                    "Game started!",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 28
                                    }, this),
                                    "It's ",
                                    gameState.players[gameState.currentTurn]?.name || "Player",
                                    "'s turn."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 271,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                            lineNumber: 270,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s(GamePage, "XLPmgsTWc9F8BMTv7BcW9vWxtXg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = GamePage;
var _c;
__turbopack_context__.k.register(_c, "GamePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=ConSPRITZador_frontend_1995fdb8._.js.map