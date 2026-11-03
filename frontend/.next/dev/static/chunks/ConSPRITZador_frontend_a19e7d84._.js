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
        style: {
            position: 'relative',
            width: '100%',
            height: '100%',
            minHeight: 360,
            overflow: 'hidden',
            background: 'radial-gradient(ellipse at 50% 38%, #7d5629 0%, #4b3117 48%, #1c1109 100%)'
        },
        children: [
            !territories && !error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,240,200,.8)'
                },
                children: "Se încarcă harta…"
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 375,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fca5a5'
                },
                children: [
                    "Nu s-a putut încărca harta (",
                    error,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 389,
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
                    lineNumber: 410,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    boxShadow: 'inset 0 0 120px 30px rgba(0,0,0,.55)'
                }
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx",
                lineNumber: 422,
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
"[project]/ConSPRITZador/frontend/app/game/[roomCode]/game.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "action": "game-module__wX2D9a__action",
  "actionInfo": "game-module__wX2D9a__actionInfo",
  "actionLabel": "game-module__wX2D9a__actionLabel",
  "actionTitle": "game-module__wX2D9a__actionTitle",
  "bottom": "game-module__wX2D9a__bottom",
  "brand": "game-module__wX2D9a__brand",
  "btn": "game-module__wX2D9a__btn",
  "card": "game-module__wX2D9a__card",
  "cardActive": "game-module__wX2D9a__cardActive",
  "cardBody": "game-module__wX2D9a__cardBody",
  "cardName": "game-module__wX2D9a__cardName",
  "cardTab": "game-module__wX2D9a__cardTab",
  "cardYou": "game-module__wX2D9a__cardYou",
  "cards": "game-module__wX2D9a__cards",
  "center": "game-module__wX2D9a__center",
  "leave": "game-module__wX2D9a__leave",
  "mapArea": "game-module__wX2D9a__mapArea",
  "meta": "game-module__wX2D9a__meta",
  "room": "game-module__wX2D9a__room",
  "root": "game-module__wX2D9a__root",
  "score": "game-module__wX2D9a__score",
  "top": "game-module__wX2D9a__top",
  "turnBadge": "game-module__wX2D9a__turnBadge",
  "turnMine": "game-module__wX2D9a__turnMine",
});
}),
"[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/lib/firebase.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$components$2f$BucharestMap3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/components/BucharestMap3D.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/ConSPRITZador/frontend/app/game/[roomCode]/game.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// host/join salvează culori ca "emerald"/"sky"; harta are nevoie de hex
const NAMED_COLORS = {
    emerald: "#2f9e4a",
    sky: "#3b82f6",
    orange: "#e0762b",
    yellow: "#e3b72a",
    red: "#d9443a",
    purple: "#b455d6",
    pink: "#d9446a"
};
const PALETTE = [
    "#e0762b",
    "#2f9e4a",
    "#e3b72a",
    "#3b82f6",
    "#b455d6",
    "#d9446a"
];
function colorFor(player, index) {
    if (player.color?.startsWith("#")) return player.color;
    return NAMED_COLORS[player.color] ?? PALETTE[index % PALETTE.length];
}
function GamePage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const roomCode = params.roomCode;
    const [game, setGame] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uid, setUid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [claiming, setClaiming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["auth"].onAuthStateChanged({
                "GamePage.useEffect.unsub": (user)=>setUid(user?.uid ?? "")
            }["GamePage.useEffect.unsub"]);
            return ({
                "GamePage.useEffect": ()=>unsub()
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            if (!roomCode) return;
            const unsub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode), {
                "GamePage.useEffect.unsub": (snap)=>{
                    setGame(snap.exists() ? snap.data() : null);
                    setLoading(false);
                }
            }["GamePage.useEffect.unsub"], {
                "GamePage.useEffect.unsub": (err)=>{
                    console.error("Firestore:", err);
                    setLoading(false);
                }
            }["GamePage.useEffect.unsub"]);
            return ({
                "GamePage.useEffect": ()=>unsub()
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], [
        roomCode
    ]);
    // gazda primul, apoi ordinea intrării în cameră
    const ordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GamePage.useMemo[ordered]": ()=>{
            if (!game) return [];
            return Object.entries(game.players ?? {}).sort({
                "GamePage.useMemo[ordered]": ([a, pa], [b, pb])=>{
                    if (a === game.hostId) return -1;
                    if (b === game.hostId) return 1;
                    return (pa.joinedAt?.seconds ?? 0) - (pb.joinedAt?.seconds ?? 0);
                }
            }["GamePage.useMemo[ordered]"]);
        }
    }["GamePage.useMemo[ordered]"], [
        game
    ]);
    const playersData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GamePage.useMemo[playersData]": ()=>Object.fromEntries(ordered.map({
                "GamePage.useMemo[playersData]": ([id, p], i)=>[
                        id,
                        {
                            name: p.name || "Jucător",
                            color: colorFor(p, i)
                        }
                    ]
            }["GamePage.useMemo[playersData]"]))
    }["GamePage.useMemo[playersData]"], [
        ordered
    ]);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].center,
        children: "Se încarcă jocul…"
    }, void 0, false, {
        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
        lineNumber: 93,
        columnNumber: 23
    }, this);
    if (!game) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].center,
        children: [
            "Camera ",
            roomCode,
            " nu există."
        ]
    }, void 0, true, {
        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
        lineNumber: 94,
        columnNumber: 21
    }, this);
    const zones = game.zones ?? {};
    const turnUid = game.currentTurn || game.hostId; // camerele vechi nu au currentTurn
    const myTurn = !!uid && turnUid === uid;
    const turnName = playersData[turnUid]?.name ?? "—";
    const selectedOwner = selected ? zones[selected] : undefined;
    const canClaim = myTurn && !!selected && !selectedOwner && !claiming;
    const handleSelect = (d)=>setSelected(d.id);
    const handleClaim = async ()=>{
        if (!canClaim || !selected) return;
        const uids = ordered.map(([id])=>id);
        const idx = uids.indexOf(uid);
        if (idx === -1) return;
        const next = uids[(idx + 1) % uids.length];
        const wrapped = idx === uids.length - 1;
        setClaiming(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["db"], "games", roomCode), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPath"]("zones", selected), uid, "currentTurn", next, "round", (game.round ?? 1) + (wrapped ? 1 : 0), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldPath"]("players", uid, "score"), (game.players[uid]?.score ?? 0) + 100);
            setSelected(null);
        } catch (err) {
            console.error("Nu s-a putut cuceri teritoriul:", err);
        } finally{
            setClaiming(false);
        }
    };
    const territoryCount = (id)=>Object.values(zones).filter((z)=>z === id).length;
    let info = "Click pe hartă pentru a alege un teritoriu.";
    if (selected) {
        info = selectedOwner ? `Cucerit de ${playersData[selectedOwner]?.name ?? "alt jucător"}.` : "Teritoriu liber.";
    }
    let btnText = "Așteaptă-ți rândul";
    if (myTurn) btnText = selected && !selectedOwner ? "Cucerește" : "Alege un teritoriu liber";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].root,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mapArea,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$components$2f$BucharestMap3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    selectedDistrict: selected,
                    onDistrictClick: handleSelect,
                    zones: zones,
                    playersData: playersData
                }, void 0, false, {
                    fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                        children: [
                            "Con",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "SPRITZ"
                            }, void 0, false, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 155,
                                columnNumber: 14
                            }, this),
                            "ador",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].room,
                                children: roomCode
                            }, void 0, false, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].turnBadge} ${myTurn ? __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].turnMine : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: [
                                    "Runda ",
                                    game.round ?? 1
                                ]
                            }, void 0, true, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: myTurn ? "Rândul tău!" : `Rândul lui ${turnName}`
                            }, void 0, false, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].leave,
                        children: "Ieși"
                    }, void 0, false, {
                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottom,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cards,
                        children: ordered.map(([id])=>{
                            const p = playersData[id];
                            const active = id === turnUid;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].card} ${active ? __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardActive : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardTab,
                                        style: {
                                            background: p.color
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardName,
                                                children: p.name
                                            }, void 0, false, {
                                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this),
                                            id === uid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardYou,
                                                children: "tu"
                                            }, void 0, false, {
                                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cardBody,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].score,
                                                children: game.players[id]?.score ?? 0
                                            }, void 0, false, {
                                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].meta,
                                                children: [
                                                    territoryCount(id),
                                                    " teritorii"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                                lineNumber: 182,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].action,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionLabel,
                                children: "Cucerire"
                            }, void 0, false, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionTitle,
                                children: selected ?? "Niciun teritoriu"
                            }, void 0, false, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].actionInfo,
                                children: info
                            }, void 0, false, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$ConSPRITZador$2f$frontend$2f$app$2f$game$2f5b$roomCode$5d2f$game$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                                disabled: !canClaim,
                                onClick: handleClaim,
                                children: claiming ? "Se salvează…" : btnText
                            }, void 0, false, {
                                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/ConSPRITZador/frontend/app/game/[roomCode]/page.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
_s(GamePage, "vZMAFlw8eL7gGipRKoS0XQMuyck=", false, function() {
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

//# sourceMappingURL=ConSPRITZador_frontend_a19e7d84._.js.map