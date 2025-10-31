const btn = document.querySelector(".button");
btn.addEventListener("click", () => {
    const choice = document.querySelector("input:checked");
    const container = document.querySelector(".container");
    const content = document.querySelector(".content");
    if (choice) {
        container.classList.add("displayNone");
        content.classList.add("displayBlock");
        const P = document.createElement("p");
        let text;
        let package;
        switch (choice.value) {
            case "easy":
                package = [
                    "The morning was calm and bright. Birds were singing, and the wind moved gently through the trees. A small cat sat on the window watching people walk by. Everyone seemed happy and full of energy. Children ran down the street, laughing and playing together. The smell of fresh bread came from the bakery nearby, making the whole town feel warm and alive.",
                    "The sun was setting behind the hills, painting the sky in soft shades of orange and pink. A cool breeze carried the scent of flowers across the fields. People were walking slowly, enjoying the quiet evening. A dog barked in the distance, breaking the calm for a moment. Lights began to appear in the houses, glowing warmly through the windows. The world felt peaceful, as if time had decided to rest for a while.",
                    "Rain started to fall gently on the rooftops, creating a soft rhythm that filled the air. The streets glistened under the streetlights, reflecting small pools of gold. A man hurried by with an umbrella, his footsteps echoing on the wet pavement. Inside a nearby café, friends laughed over steaming cups of coffee. The air smelled of fresh rain and roasted beans, blending into a comforting mix that made the city feel alive.",
                    "The park was full of life that morning. Joggers passed by with music in their ears, and children chased pigeons near the fountain. An old man sat on a bench reading his newspaper, his glasses sliding down his nose. The sound of laughter mixed with the rustle of leaves in the trees. Everything seemed to move in harmony, as if the day itself was smiling at everyone.",
                    "Snow began to fall slowly, covering the ground in a clean white blanket. The air was cold but still, and every sound felt softer than usual. A few people walked quickly, leaving clear footprints behind them. Inside the houses, windows glowed with light and warmth. The smell of soup and baked cookies filled the air, reminding everyone that winter could be gentle too.",
                    "The sea was calm, with small waves touching the sand and fading quietly. Seagulls circled above, calling out as they searched for food. A group of children built a sandcastle near the water, their laughter carried by the wind. Far away, a boat moved slowly toward the horizon. The salty air filled every breath, bringing a feeling of peace and endless freedom."
                ];
                console.log(Math.floor(Math.random()*7))
                text = package[Math.floor(Math.random()*package.length)].split('');
                break;
            case "hard":
                package = [
                    "The city awoke beneath a silver sky, where clouds drifted slowly across the horizon. Streetlights flickered out one by one as morning light touched the quiet avenues. A baker opened his shop, and the warm scent of bread mixed with the cool air. Birds perched on telephone wires, singing softly above the growing hum of traffic. A young boy hurried past with a schoolbag, his footsteps echoing against the stone walls. Somewhere in the distance, a train whistled, fading into the steady rhythm of the day. The world felt calm yet alive, filled with quiet purpose and the promise of new beginnings.",
                    "The garden shimmered after the rain, each leaf holding a perfect drop of water that caught the light. The air smelled of earth and blossoms, fresh and deep. A butterfly moved slowly among the roses, its wings opening like small pieces of stained glass. Somewhere, a gate creaked as the wind passed through the trees. The sound of distant laughter drifted over the hedges, soft and carefree. Everything seemed to pause for a moment, balanced between stillness and renewal, as if nature had just taken a long, peaceful breath.",
                    "The train station buzzed with quiet urgency as travelers hurried past, their footsteps blending with the rhythmic hum of engines. A young couple stood by the platform, exchanging a few words before parting. The air smelled faintly of metal and coffee, warm against the cool morning breeze. Announcements echoed above, their voices distant yet comforting. Outside, sunlight broke through the clouds, glinting off the glass roof. For a moment, everything felt suspended in time—neither beginning nor ending, just moving forward with quiet certainty.",
                    "The forest was alive with sound, from the chirping of insects to the whisper of leaves swaying high above. Sunlight filtered through the branches, scattering golden shapes across the mossy ground. A narrow stream trickled between the roots of old trees, its surface trembling with the breeze. A deer appeared at the edge of a clearing, still and graceful, listening to the soft music of the woods. The air was cool and sweet, filled with the scent of pine and wildflowers. Every step deeper into the forest felt like entering another world, ancient and endlessly calm.",
                    "The evening air shimmered with the last warmth of the setting sun. Waves rolled gently onto the sand, their edges glowing like liquid gold. A woman walked along the shore, leaving a trail of footprints that vanished with each wave. The distant sound of laughter came from a group near a bonfire, mixing with the soft crash of the sea. Above, the first stars began to appear, faint but steady. The night was slow to arrive, unfolding quietly across the sky, carrying with it the calm promise of rest and reflection."
                ];
                text = package[Math.floor(Math.random()*package.length)].split('');
                break;
            default : break;
        }
        text.forEach(span=>{
            let spanTag = `<span>${span}</span>`;
            P.innerHTML += spanTag;
        })
        P.classList.add("monospace");
        content.appendChild(P);
        let span = document.querySelectorAll("span");
        let index = 0;
        let count = 0;
        function handlekeydown(e){
            if (e.key.length == 1) {
                if(e.key === span[index].innerText)
                    span[index].classList.add("right");
                else
                    span[index].classList.add("wrong");
                index++;
                count++;  
            }
            if (e.key === "Backspace") {
                span[index-1].classList.remove("right");
                span[index-1].classList.remove("wrong");
                if(index != 0)
                    index--;
                count++;
            }
        }
        window.addEventListener("keydown", handlekeydown);
        let timer = document.createElement("div");
        let mydiv = document.createElement("div");
        mydiv.classList.add("timing");
        document.body.prepend(mydiv);
        let time = 0;
        timer.innerText = `letf time : ${time}s`;
        let interval;
        mydiv.append(timer);
        function start() {
            interval = setInterval(() =>{
                time++;
                timer.innerText = `time : ${time}s`;
                if(span.length <= index){
                    clearInterval(interval);
                    window.removeEventListener("keydown", handlekeydown);
                    score.innerText = "score : "+Math.floor(((text.length/5)*60)/time)+" WPM";
                }
            },600)
            window.removeEventListener("keydown", start);  
        }
        window.addEventListener("keydown", start);

        let score = document.createElement("div");
        score.innerText = "score :counting...   ";
        mydiv.append(score);
    }
});