import { asset } from "$fresh/runtime.ts";

export default function Page() {
  return (
    <>
        <section class="bg-[url('/background.webp')] bg-cover h-screen flex flex-col items-center font-bold">
            <main class="container m-auto text-slate-100 text-2xl backdrop-brightness-75 space-y-4">
                <h1 class="text-4xl mb-8 container bold">We need to imaging a better future for digital systems</h1>
                <p>
                    We should strive to build sustainable systems controlled by the communities they are built around and for.
                    This won't be built at large tech companies or SAAS startups, but by people who care to chart a better future.
                </p>
                <p class="text-4xl">
                    The following principals should be considered
                </p>
                <ul class="list-disc ml-8">
                    <li>We live on a finite planet infinate growth isn't possible and shouldn't be desired.</li>
                    <li>Built to reenforce social connections over disrupting markets</li>
                    <li>Strive to share knowedge and not gate it off</li>
                    <li>Accessible to all who desire to participate</li>
                </ul>
            </main>
        </section>
        <section class="h-screen">
            <h2 class="text-2xl mb-2">
                Why do we need to build something better?
            </h2>
            <p>
                Maybe you see it with your own eyes, but there are many who have written and researched it more than I could ever.
            </p>
            <div class="flex h-44">
                <img src="/twsu.webp" class="w-32 object-scale-down bg-black hover:scale-125"></img>
                <img src="/monkey_500.webp" class="w-32 object-scale-down object-bottom bg-violet-950 hover:scale-125"></img>
                <img src="/tf.webp" class="w-32 object-scale-down bg-black hover:scale-125"></img>
                <img src="/bo.webp" class="w-32 object-scale-down bg-black hover:scale-125"></img>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118.89 37.86" class="w-32 bg-black hover:scale-125">
                    <path class="fill-white" d="M25.6,.73h13.52l-5,22.98h4.68v6.55h-6.12l-1.49,6.86h-7.03l1.49-6.86H9.47v-9.67L25.6,.73ZM15.38,22.78v.94h11.71L31.35,4.16h-.96L15.38,22.78Z"></path>
                    <path class="fill-white" d="M44.92,14.87c1.1-5.13,2.94-8.89,5.51-11.28s6.11-3.59,10.62-3.59c1.88,0,3.55,.29,5,.86,1.46,.57,2.68,1.37,3.67,2.39s1.75,2.23,2.26,3.61c.51,1.39,.77,2.88,.77,4.47,0,.59-.03,1.18-.08,1.77-.05,.59-.15,1.18-.29,1.77l-1.76,8.11c-1.1,5.13-2.94,8.89-5.51,11.28-2.57,2.39-6.11,3.59-10.62,3.59-1.88,0-3.55-.29-5-.86s-2.68-1.37-3.67-2.39c-.99-1.02-1.75-2.22-2.26-3.59-.51-1.37-.77-2.87-.77-4.5,0-.59,.03-1.18,.08-1.77,.05-.59,.15-1.18,.29-1.77l1.76-8.11Zm10.22,16.74c1.21,0,2.27-.22,3.19-.65,.92-.43,1.73-1.01,2.42-1.74,.69-.73,1.26-1.59,1.7-2.6,.44-1,.79-2.08,1.04-3.22l1.97-8.94c.11-.55,.19-1.03,.24-1.43,.05-.4,.08-.79,.08-1.17,0-1.77-.47-3.15-1.41-4.13-.94-.99-2.26-1.48-3.97-1.48-1.21,0-2.27,.22-3.19,.65-.92,.43-1.73,1.01-2.42,1.74-.69,.73-1.26,1.59-1.7,2.6-.44,1.01-.79,2.08-1.04,3.22l-1.97,8.94c-.21,.94-.32,1.8-.32,2.6,0,1.77,.47,3.15,1.41,4.13s2.26,1.48,3.97,1.48Z"></path>
                    <path class="fill-white" d="M90.76,.73h13.52l-5,22.98h4.68v6.55h-6.12l-1.49,6.86h-7.03l1.49-6.86h-16.18v-9.67L90.76,.73Zm-10.22,22.05v.94h11.71l4.26-19.55h-.96l-15.01,18.62Z"></path>
                    <path class="fill-lime-300" d="M1.07,31.42c-.58,.04-1.07-.41-1.07-.99v-.47c0-.23,.07-.46,.22-.64l1.07-1.31c.16-.19,.24-.43,.22-.68l-.27-5.39c0-.5,.36-.93,.86-1,9.83-1.36,104.88-12.17,115.62-13.39,.55-.06,1.03,.33,1.09,.88l.07,.68c.04,.42-.18,.82-.56,1.01l-1.51,.73c-.15,.07-.26,.21-.29,.37l-.8,4.31c-.08,.42-.41,.75-.84,.81C105.82,17.59,12.17,30.56,1.07,31.42Z"></path>
                    <path class="fill-lime-300" d="M35.59,16.96c-2.48,.29-4.89,.57-7.21,.84l-1.29,5.92H15.38v-.94l3.08-3.82c-3.2,.38-6.05,.71-8.48,1.01l-.51,.63v9.67h1.88c7.04-.87,16.75-2.14,27.45-3.56v-2.99h-4.68l1.47-6.76Zm59.62-6.84l-2.01,9.22c2.58-.35,5.01-.69,7.24-1l1.97-9.04c-2.24,.25-4.65,.53-7.2,.82Zm-20.58,10.48v1.28c2.54-.35,5.04-.69,7.46-1.02l8.21-10.18c-2.69,.31-5.5,.63-8.39,.96l-7.27,8.96Zm-31.46,2.39c-.14,.59-.24,1.18-.29,1.77-.04,.47-.06,.95-.06,1.42,2.31-.31,4.65-.62,7.01-.94,.05-.58,.12-1.18,.27-1.83l1.83-8.33c-2.43,.28-4.84,.56-7.22,.83l-1.53,7.08Zm22.3-8.53l-1.97,8.93c2.44-.33,4.86-.66,7.26-.99l1.63-7.53c.14-.59,.24-1.18,.29-1.77,.01-.14,0-.28,.02-.42-2.33,.27-4.69,.54-7.06,.81-.05,.29-.1,.6-.17,.96Z"></path>
                </svg>
                <img src="/lgu.webp" class="w-32 object-scale-down bg-black hover:scale-125"></img>
                <img src="/pa.webp" class="w-32 object-scale-down bg-black hover:scale-125"></img>
                <img src="/lu.webp" class="w-32 object-scale-down bg-black hover:scale-125"></img>
                <img src="/ml.webp" class="w-32 object-scale-down bg-black hover:scale-125"></img>
            </div>
            <p class="text-lg">
                Hopefully it's obvious that we need to imagine beyond infinate growth and speculative value not yet realized. This
                hasn't served us well. The internet has a physical body, which impacts local communities and slows our switch to
                renewable energy. The consolidation of the market leads to products which don't respect their users and are intentionaly
                made worse to persue growth at all cost.
            </p>
        </section>
        <section>
            <h2 class="text-2xl mb-2">
                How do we build something better?
            </h2>
            <p class="text-lg mb-2">
                Computers and software are a social construct, each abstraction, hardware spec and design was built by someone.
                There is no magic and it's course can be changed, the task is overwhelming individually which is why we need to organize.
                After all anything we build should allow for the participation of those who use and depend on them.
                This is a messy process, as we all don't agree or see the world from the same perspective bring our unique contexts.
                We also shouldn't focus on quantifying our contributions as who contributed the most matters less than the social outcomes
                and impacts of the systems we build together.
            </p>
            <p class="text-lg">
                From each according to his ability, to each according to his needs.
            </p>
        </section>
    </>
  );
}