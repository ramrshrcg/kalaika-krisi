import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, TriangleAlert, Trophy, Play } from "lucide-react";
import { motion } from "framer-motion";

const OBSTACLES = ["🌵", "🪨", "🌾", "🪵", '🍄', '🐿️'];

export default function NotFoundPage() {
    const dragonRef = useRef<HTMLDivElement>(null);
    const obstacleRef = useRef<HTMLDivElement>(null);
    const scoreRef = useRef<HTMLSpanElement>(null);

    const [gameState, setGameState] = useState<"IDLE" | "PLAYING" | "GAMEOVER">("IDLE");
    const [finalScore, setFinalScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [currentObstacle, setCurrentObstacle] = useState("🌵");

    // Sound synthesis
    const playSound = useCallback((type: "point" | "gameover") => {
        try {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            if (type === "point") {
                // High ping sound
                osc.type = "sine";
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.1);
            } else if (type === "gameover") {
                // Low declining bzzt sound
                osc.type = "sawtooth";
                osc.frequency.setValueAtTime(150, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.3);
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.3);
            }
        } catch (e) {
            console.error("Audio playback failed", e);
        }
    }, []);

    const score = useRef(0);
    const dY = useRef(0);
    const dVy = useRef(0);
    const obsX = useRef(100);
    const gameSpeed = useRef(0.8);

    const jump = useCallback(() => {
        if (gameState === "IDLE" || gameState === "GAMEOVER") {
            setGameState("PLAYING");
            score.current = 0;
            obsX.current = 100;
            gameSpeed.current = 0.8;
            dY.current = 0;
            dVy.current = 0;
            setCurrentObstacle(OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)]);
            return;
        }
        if (dY.current === 0) {
            dVy.current = 14;
        }
    }, [gameState]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.code === "ArrowUp") {
                e.preventDefault();
                jump();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [jump]);

    useEffect(() => {
        if (gameState !== "PLAYING") return;

        let reqId: number;
        let lastTime = performance.now();

        const loop = (time: number) => {
            const dt = time - lastTime;
            const step = dt / 16.66; // Normalize to ~60fps
            lastTime = time;

            // Dragon physics
            dY.current += dVy.current * step;
            dVy.current -= 0.8 * step;

            if (dY.current < 0) {
                dY.current = 0;
                dVy.current = 0;
            }

            // Move the scene
            obsX.current -= gameSpeed.current * step;

            if (obsX.current < -10) {
                obsX.current = 100;
                score.current += 10;
                gameSpeed.current += 0.04;
                setCurrentObstacle(OBSTACLES[Math.floor(Math.random() * OBSTACLES.length)]);
                playSound("point");
            }

            // Hit box detection
            const dLeft = 11;
            const dRight = 17;
            const oLeft = obsX.current + 1;
            const oRight = obsX.current + 4;

            const dBottom = dY.current + 2;
            const dTop = dY.current + 35;
            const oBottom = 0;
            const oTop = 25;

            if (
                dRight > oLeft &&
                dLeft < oRight &&
                dBottom < oTop &&
                dTop > oBottom
            ) {
                playSound("gameover");
                setGameState("GAMEOVER");
                setFinalScore(score.current);
                setHighScore(prev => Math.max(prev, score.current));
                return;
            }

            // Direct DOM updates for ~60fps smooth animation without React state overhead
            if (dragonRef.current) dragonRef.current.style.bottom = `${40 + dY.current}px`;
            if (obstacleRef.current) obstacleRef.current.style.left = `${obsX.current}%`;
            if (scoreRef.current) scoreRef.current.innerText = score.current.toString();

            reqId = requestAnimationFrame(loop);
        };

        reqId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(reqId);
    }, [gameState]);

    return (
        <div className="min-h-[85vh] flex flex-col items-center justify-center p-4 bg-slate-50 relative overflow-hidden">

            <div className="max-w-xl w-full text-center space-y-6 z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center mb-8"
                >
                    <div className="w-20 h-20 bg-amber-100/50 text-amber-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-amber-200">
                        <TriangleAlert className="w-10 h-10" />
                    </div>
                    <h1 className="text-6xl font-black text-slate-900 mb-2">404</h1>
                    <h2 className="text-2xl font-bold text-slate-700">Lost in the Farm?</h2>
                    <p className="text-slate-500 mt-2 text-lg">
                        While we try to find that page, help the baby dragon jump over the obstacles!
                    </p>
                </motion.div>

                {/* GAME CONTAINER */}
                <div
                    className="w-full h-72 bg-white border-2 border-slate-200 rounded-3xl relative overflow-hidden shadow-sm cursor-pointer select-none group"
                    onClick={jump}
                >
                    {/* Background elements */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 to-white pointer-events-none" />

                    {/* Clouds (Aesthetics) */}
                    <div className="absolute top-8 left-[20%] text-4xl opacity-50 select-none animate-[slide_10s_linear_infinite]">☁️</div>
                    <div className="absolute top-12 left-[80%] text-3xl opacity-40 select-none animate-[slide_15s_linear_infinite]">☁️</div>
                    <div className="absolute top-4 left-[50%] text-5xl opacity-30 select-none animate-[slide_12s_linear_infinite]">☁️</div>

                    {/* Score */}
                    <div className="absolute top-4 right-6 text-xl font-mono font-bold text-slate-400">
                        Score: <span ref={scoreRef} className="text-slate-700">{gameState === "PLAYING" ? 0 : finalScore}</span>
                    </div>

                    {/* High Score */}
                    {highScore > 0 && (
                        <div className="absolute top-4 left-6 text-sm font-bold text-amber-500 flex items-center bg-amber-50 px-3 py-1 rounded-full border border-amber-100">
                            <Trophy className="w-4 h-4 mr-1" /> Best: {highScore}
                        </div>
                    )}

                    {/* Ground */}
                    <div className="absolute bottom-10 left-0 right-0 h-0.5 bg-emerald-200" />
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-emerald-50/50" />

                    {/* Dragon */}
                    <div
                        ref={dragonRef}
                        className="absolute left-[10%] text-[50px] leading-none transition-transform drop-shadow-sm"
                        style={{ bottom: "40px", zIndex: 20 }}
                    >
                        🐲
                    </div>

                    {/* Obstacle */}
                    <div
                        ref={obstacleRef}
                        className="absolute text-[40px] leading-none drop-shadow-sm"
                        style={{ bottom: "40px", left: "100%", zIndex: 10 }}
                    >
                        {currentObstacle}
                    </div>

                    {/* Overlays */}
                    {gameState === "IDLE" && (
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center flex-col">
                            <div className="bg-slate-900 text-white font-bold py-3 px-8 rounded-full animate-bounce shadow-xl flex items-center text-lg">
                                <Play className="w-5 h-5 mr-no mr-2 fill-white" />
                                Press SPACE or Tap to Start!
                            </div>
                        </div>
                    )}

                    {gameState === "GAMEOVER" && (
                        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center flex-col">
                            <h3 className="text-4xl font-black text-slate-900 mb-2">Game Over!</h3>
                            <p className="text-lg font-medium text-slate-600 mb-6 font-mono">You scored <span className="font-bold text-slate-800">{finalScore}</span> points</p>
                            <div className="bg-primary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-primary-700 transition-colors flex items-center text-lg">
                                <Play className="w-5 h-5 mr-2 fill-white" />
                                Try Again
                            </div>
                        </div>
                    )}
                </div>

                <div className="pt-8">
                    <Link to="/" className="inline-block">
                        <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl font-bold bg-white text-slate-700 hover:text-primary-700 hover:bg-primary-50 hover:border-primary-200 transition-all shadow-sm border-2">
                            <Home className="w-5 h-5 mr-2" />
                            Back to Actual Website
                        </Button>
                    </Link>
                </div>
            </div>

            <style>{`
                @keyframes slide {
                    from { transform: translateX(100vw); }
                    to { transform: translateX(-100vw); }
                }
            `}</style>
        </div>
    );
}
