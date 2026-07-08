import React, { useEffect, useRef } from "react";

export default function CosmicBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        let animationFrameId;

        // Resize handler
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        // Stars array
        const stars = [];
        const numStars = Math.min(250, Math.floor((window.innerWidth * window.innerHeight) / 6000));

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.3,
                baseAlpha: Math.random() * 0.5 + 0.3,
                alpha: 0,
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinkleOffset: Math.random() * Math.PI * 2,
                parallax: Math.random() * 0.15 + 0.05, // Parallax scroll factor
            });
        }

        // Shooting Star class
        class ShootingStar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * (canvas.height * 0.6); // Start upper half
                this.length = Math.random() * 80 + 40;
                this.speed = Math.random() * 6 + 4;
                this.angle = Math.PI / 6 + (Math.random() * Math.PI) / 12; // ~30 to 45 deg diagonal
                this.opacity = 1;
                this.fadeSpeed = Math.random() * 0.015 + 0.008;
                this.active = false;
            }

            trigger() {
                this.x = Math.random() * (canvas.width * 0.8);
                this.y = Math.random() * (canvas.height * 0.4);
                this.active = true;
                this.opacity = 1;
            }

            update() {
                if (!this.active) return;
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;
                this.opacity -= this.fadeSpeed;
                if (this.opacity <= 0 || this.x > canvas.width || this.y > canvas.height) {
                    this.active = false;
                }
            }

            draw() {
                if (!this.active) return;
                ctx.save();
                ctx.strokeStyle = `rgba(165, 243, 252, ${this.opacity})`; // Cyan shooting star
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(
                    this.x - Math.cos(this.angle) * this.length,
                    this.y - Math.sin(this.angle) * this.length
                );
                ctx.stroke();
                ctx.restore();
            }
        }

        const shootingStars = Array.from({ length: 2 }, () => new ShootingStar());

        // Periodically trigger shooting stars
        const triggerInterval = setInterval(() => {
            const inactiveStar = shootingStars.find(s => !s.active);
            if (inactiveStar && Math.random() < 0.7) {
                inactiveStar.trigger();
            }
        }, 4000);

        let scrollY = window.scrollY;
        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        // Animation Loop
        let time = 0;
        const animate = () => {
            time += 1;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Stars
            for (let i = 0; i < stars.length; i++) {
                const star = stars[i];

                // Simple twinkling using sine wave
                star.alpha = star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.25;
                star.alpha = Math.max(0.1, Math.min(1, star.alpha));

                // Parallax scroll calculation: vertical offset based on scroll position
                let drawY = (star.y - scrollY * star.parallax) % canvas.height;
                if (drawY < 0) drawY += canvas.height;

                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.beginPath();
                ctx.arc(star.x, drawY, star.size, 0, Math.PI * 2);
                ctx.fill();
            }

            // Update & Draw Shooting Stars
            shootingStars.forEach((star) => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
            clearInterval(triggerInterval);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-[#030712]">
            {/* Multiple subtle radial background gradients for a deep layered space look */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,#081229_0%,transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,#111827_0%,transparent_50%)]" />

            {/* Soft blurred nebula clouds (Blue, Purple, Cyan) */}
            <div className="absolute top-[20%] left-[15%] w-[45vw] h-[45vw] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[25%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-950/8 blur-[150px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-[50%] right-[20%] w-[35vw] h-[35vw] rounded-full bg-cyan-950/10 blur-[130px] pointer-events-none mix-blend-screen" />

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
    );
}
