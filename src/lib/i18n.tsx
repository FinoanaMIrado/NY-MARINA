import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const languages = ["mg", "fr", "en"] as const;
export type Language = (typeof languages)[number];

const messages = {
  fr: {
    language: "Langue",
    howItWorksNav: "Comment ça marche",
    whyNav: "Pourquoi",
    detectNav: "Ce qu'on repère",
    journalistSpace: "Espace journaliste",
    heroLine1: "Vérifiez l'info",
    heroLine2: "avant de la",
    heroLine3: "partager",
    heroDescription: "Ny Marina analyse un lien ou une capture d'écran, recherche des sources qui confirment ou contredisent l'information, puis vous donne une estimation de sa fiabilité. Gratuit, sans inscription.",
    verificationLabel: "Vérification d'informations",
    madeInMadagascar: "Fait à Madagascar",
    introTitle: "Ne vous laissez plus piéger par les fausses infos",
    introDescription: "Sur les réseaux sociaux, une rumeur circule plus vite qu'un démenti. Ny Marina — « la vérité » — vous aide à faire le tri entre ce qui est fiable, trompeur ou non vérifié.",
    crowdAlt: "Foule de personnages lisant des journaux et des téléphones",
    sourceTypes: "Types de sources",
    accountRequired: "Compte requis",
    free: "Gratuit",
    perAnalysis: "Par analyse",
    howItWorksTitle: "Comment ça marche",
    stepsIntro: "Quatre étapes automatiques, de la soumission à l'explication du résultat.",
    stepSubmit: "Soumission",
    stepSubmitDescription: "Un lien URL ou une capture d'écran contenant l'information.",
    stepExtract: "Extraction",
    stepExtractDescription: "Le texte et les affirmations principales sont identifiés.",
    stepSearch: "Recherche",
    stepSearchDescription: "D'autres sources sur Internet sont collectées et comparées.",
    stepVerdict: "Résultat",
    stepVerdictDescription: "Un taux de fiabilité, une jauge et une explication claire.",
    whatWeDetect: "Ce que Ny Marina repère",
    detectIntro: "Avant de calculer un taux de fiabilité, l'analyse cherche les signes connus de désinformation dans le contenu soumis.",
    detectUnsourced: "Rumeurs sans source",
    detectUnsourcedDescription: "Une publication affirme un fait, mais rien n'indique d'où il vient.",
    detectReusedImages: "Images recyclées",
    detectReusedImagesDescription: "Une photo ou une vidéo d'un ancien événement présentée comme actuelle.",
    detectContextlessNumbers: "Chiffres sortis de contexte",
    detectContextlessNumbersDescription: "Un pourcentage vrai, lu sans comparaison ni période de référence.",
    detectFakeReleases: "Communiqués imités",
    detectFakeReleasesDescription: "Un faux communiqué qui reprend la mise en page d'une institution.",
    latestCases: "Derniers dossiers vérifiés",
    examples: "Exemples",
    sampleRiceTitle: "Hausse du prix du riz à Antananarivo",
    sampleWaterTitle: "Coupure d'eau générale de 7 jours",
    sampleVaccineTitle: "Nouveau vaccin distribué en brousse",
    sampleCycloneTitle: "Cyclone attendu sur la côte Est",
    sampleRiceDescription: "Plusieurs sources de presse et le ministère confirment une hausse de 12 % ce mois-ci.",
    sampleWaterDescription: "Aucune annonce officielle de la JIRAMA, la publication d'origine a été supprimée.",
    sampleVaccineDescription: "Information partiellement relayée, sources insuffisantes pour conclure.",
    sampleCycloneDescription: "Météo Madagascar confirme une dépression tropicale en formation.",
    sampleDisclaimer: "Exemples de dossiers déjà vérifiés. Les taux sont des estimations, pas des garanties.",
    journalistCta: "Journaliste, vérifiez avant vos lecteurs",
    openJournalistSpace: "Ouvrir l'espace journaliste",
    resultsDisclaimer: "Les résultats sont des estimations et ne constituent pas une garantie absolue de véracité.",
    loginTitle: "Espace",
    loginTitleHighlight: "journaliste",
    email: "E-mail",
    emailPlaceholder: "vous@redaction.mg",
    password: "Mot de passe",
    pressCard: "Carte de presse",
    uploadPressCard: "Importer votre carte de presse",
    pressCardFormats: "Recto, PNG, JPG ou PDF",
    signIn: "Se connecter",
    verifyTab: "Vérifier",
    myChecks: "Mes vérifications",
    signOut: "Se déconnecter",
    true: "VRAI",
    false: "FAUX",
    doubtful: "DOUTEUX",
    urlSource: "Lien URL",
    imageSource: "Image",
    verifyNow: "Vérifiez maintenant,",
    shareLater: "partagez ensuite",
    verifyIntro: "Collez un lien d'article ou de publication, ou importez une capture d'écran. Aucun compte n'est nécessaire.",
    screenshot: "Capture d'écran",
    dropImage: "Déposez votre image",
    screenshotFormats: "PNG, JPG — capture d'écran",
    analyzing: "Analyse en cours…",
    startVerification: "Lancer la vérification",
    extracting: "Extraction du contenu",
    searchingSources: "Recherche de sources",
    analyzingWithAi: "Analyse par l'IA",
    resultPlaceholder: "Votre résultat apparaîtra ici.",
    likelyReliable: "Information plutôt fiable",
    useCaution: "Information à prendre avec prudence",
    likelyMisleading: "Information probablement trompeuse",
    sampleJustification: "Justification (exemple) : plusieurs sources consultées ont été comparées. Certaines confirment les faits principaux, d'autres apportent des nuances sur les chiffres avancés.",
    analyzedSource: "Source analysée :",
    scoreDisclaimer: "Ce pourcentage est une estimation, pas une garantie.",
  },
  mg: {
    language: "Fiteny",
    howItWorksNav: "Ahoana ny fiasany",
    whyNav: "Antony",
    detectNav: "Izay fantarina",
    journalistSpace: "Toeran'ny mpanao gazety",
    heroLine1: "Hamarino ny vaovao",
    heroLine2: "alohan'ny",
    heroLine3: "hizarana azy",
    heroDescription: "Mandiniha rohy na pikantsary ny Ny Marina, mitady loharano manamarina na mandà ny vaovao, ary manome tombana ny fahatokisana azy. Maimaim-poana, tsy mila kaonty.",
    verificationLabel: "Fanamarinam-baovao",
    madeInMadagascar: "Vita eto Madagasikara",
    introTitle: "Aza voafitaky ny vaovao tsy marina intsony",
    introDescription: "Miparitaka haingana kokoa noho ny fanitsiana ny tsaho amin'ny tambajotra sosialy. Ny Marina dia manampy anao hanavaka ny azo itokisana, ny mamitaka ary ny mbola tsy voamarina.",
    crowdAlt: "Vahoaka mamaky gazety sy mampiasa finday",
    sourceTypes: "Karazana loharano",
    accountRequired: "Kaonty ilaina",
    free: "Maimaim-poana",
    perAnalysis: "Isaky ny fanadihadiana",
    howItWorksTitle: "Ahoana ny fiasany",
    stepsIntro: "Dingana efatra mandeha ho azy, manomboka amin'ny fandefasana ka hatramin'ny fanazavana ny valiny.",
    stepSubmit: "Alefa",
    stepSubmitDescription: "Rohy na pikantsary misy ilay vaovao.",
    stepExtract: "Fakana lahatsoratra",
    stepExtractDescription: "Fantarina ny lahatsoratra sy ny filazana lehibe.",
    stepSearch: "Fikarohana",
    stepSearchDescription: "Angonina sy ampitahaina ny loharano hafa amin'ny Internet.",
    stepVerdict: "Valiny",
    stepVerdictDescription: "Tahan'ny fahatokisana, mari-pandrefesana ary fanazavana mazava.",
    whatWeDetect: "Izay fantarin'ny Ny Marina",
    detectIntro: "Alohan'ny hanombanana ny fahatokisana, tadiavina ireo famantarana mahazatra amin'ny vaovao diso.",
    detectUnsourced: "Tsaho tsy misy loharano",
    detectUnsourcedDescription: "Milaza zavatra ny lahatsoratra iray nefa tsy fantatra ny niaviany.",
    detectReusedImages: "Sary nampiasaina indray",
    detectReusedImagesDescription: "Sary na horonan-tsary tamin'ny tranga taloha aseho ho zava-mitranga ankehitriny.",
    detectContextlessNumbers: "Isa tsy ampy fanazavana",
    detectContextlessNumbersDescription: "Taha marina nefa tsy ampitahaina na tsy omena ny vanim-potoana.",
    detectFakeReleases: "Fanambarana sandoka",
    detectFakeReleasesDescription: "Fanambarana sandoka maka tahaka ny endriky ny andrim-panjakana.",
    latestCases: "Fanamarinana farany",
    examples: "Ohatra",
    sampleRiceTitle: "Fiakaran'ny vidin'ny vary eto Antananarivo",
    sampleWaterTitle: "Fahatapahan-drano mandritra ny 7 andro",
    sampleVaccineTitle: "Vaksiny vaovao zaraina any ambanivohitra",
    sampleCycloneTitle: "Rivo-doza andrasana any amin'ny morontsiraka atsinanana",
    sampleRiceDescription: "Loharanom-baovao maromaro sy ny ministera no manamarina fiakarana 12% tamin'ity volana ity.",
    sampleWaterDescription: "Tsy misy fanambarana ofisialin'ny JIRAMA ary voafafa ny lahatsoratra niaviany.",
    sampleVaccineDescription: "Misy mitatitra ampahany, saingy tsy ampy ny loharano hanatsoahana hevitra.",
    sampleCycloneDescription: "Manamarina ny fisian'ny rivodoza tropikaly miforona ny Météo Madagascar.",
    sampleDisclaimer: "Ohatra amin'ny fanamarinana efa vita. Tombana ny taha fa tsy antoka.",
    journalistCta: "Mpanao gazety, hamarino alohan'ny hampahafantarana ny mpamaky",
    openJournalistSpace: "Sokafy ny toeran'ny mpanao gazety",
    resultsDisclaimer: "Tombana ny valiny ary tsy antoka tanteraka momba ny fahamarinan'ny vaovao.",
    loginTitle: "Toeran'ny",
    loginTitleHighlight: "mpanao gazety",
    email: "Mailaka",
    emailPlaceholder: "ianao@redaction.mg",
    password: "Teny miafina",
    pressCard: "Karatra maha-mpanao gazety",
    uploadPressCard: "Ampidiro ny karatra maha-mpanao gazety",
    pressCardFormats: "Lafiny aloha, PNG, JPG na PDF",
    signIn: "Hiditra",
    verifyTab: "Hamarino",
    myChecks: "Ny fanamarinako",
    signOut: "Hivoaka",
    true: "MARINA",
    false: "DISO",
    doubtful: "MISALASALA",
    urlSource: "Rohy URL",
    imageSource: "Sary",
    verifyNow: "Hamarino izao,",
    shareLater: "vao zarao",
    verifyIntro: "Apetaho ny rohin'ny lahatsoratra na hafatra, na ampidiro ny pikantsary. Tsy mila kaonty.",
    screenshot: "Pikantsary",
    dropImage: "Ampidiro eto ny sary",
    screenshotFormats: "PNG, JPG — pikantsary",
    analyzing: "Eo am-pandinihana…",
    startVerification: "Atombohy ny fanamarinana",
    extracting: "Fakana ny votoaty",
    searchingSources: "Fikarohana loharano",
    analyzingWithAi: "Fanadihadiana amin'ny AI",
    resultPlaceholder: "Hiseho eto ny valiny.",
    likelyReliable: "Azo inoana fa azo itokisana",
    useCaution: "Tandremo ity vaovao ity",
    likelyMisleading: "Mety hamitaka ity vaovao ity",
    sampleJustification: "Fanazavana (ohatra) : nampitahaina ny loharano maromaro. Misy manamarina ny zava-misy lehibe, ary misy manome fanazavana fanampiny momba ny tarehimarika.",
    analyzedSource: "Loharano nodinihina :",
    scoreDisclaimer: "Tombana io taha io fa tsy antoka.",
  },
  en: {
    language: "Language",
    howItWorksNav: "How it works",
    whyNav: "Why",
    detectNav: "What we detect",
    journalistSpace: "Journalist area",
    heroLine1: "Check the facts",
    heroLine2: "before you",
    heroLine3: "share them",
    heroDescription: "Ny Marina analyzes a link or screenshot, searches for sources that confirm or challenge the information, then estimates its reliability. Free, no account required.",
    verificationLabel: "Fact checking",
    madeInMadagascar: "Made in Madagascar",
    introTitle: "Don't fall for false information",
    introDescription: "On social media, rumors spread faster than corrections. Ny Marina — “the truth” — helps you sort reliable information from misleading or unverified claims.",
    crowdAlt: "Crowd reading newspapers and using phones",
    sourceTypes: "Source types",
    accountRequired: "Account required",
    free: "Free",
    perAnalysis: "Per analysis",
    howItWorksTitle: "How it works",
    stepsIntro: "Four automatic steps, from submission to a clear explanation of the result.",
    stepSubmit: "Submit",
    stepSubmitDescription: "A URL or screenshot containing the information.",
    stepExtract: "Extract",
    stepExtractDescription: "The text and main claims are identified.",
    stepSearch: "Research",
    stepSearchDescription: "Other sources on the Internet are collected and compared.",
    stepVerdict: "Verdict",
    stepVerdictDescription: "A reliability score, gauge, and clear explanation.",
    whatWeDetect: "What Ny Marina detects",
    detectIntro: "Before estimating reliability, the analysis looks for known signs of misinformation in the submitted content.",
    detectUnsourced: "Rumors without a source",
    detectUnsourcedDescription: "A post makes a claim without indicating where it came from.",
    detectReusedImages: "Reused images",
    detectReusedImagesDescription: "A photo or video from an old event presented as current.",
    detectContextlessNumbers: "Numbers out of context",
    detectContextlessNumbersDescription: "A true percentage shown without comparison or a reference period.",
    detectFakeReleases: "Imitated statements",
    detectFakeReleasesDescription: "A fake statement that copies an institution's layout.",
    latestCases: "Recent checks",
    examples: "Examples",
    sampleRiceTitle: "Rice price increase in Antananarivo",
    sampleWaterTitle: "Seven-day water outage",
    sampleVaccineTitle: "New vaccine distributed in rural areas",
    sampleCycloneTitle: "Cyclone expected on the east coast",
    sampleRiceDescription: "Several news sources and the ministry confirm a 12% increase this month.",
    sampleWaterDescription: "There is no official JIRAMA announcement, and the original post was deleted.",
    sampleVaccineDescription: "The claim has been reported in part, but sources are insufficient to conclude.",
    sampleCycloneDescription: "Météo Madagascar confirms a tropical depression is forming.",
    sampleDisclaimer: "Examples of completed checks. Scores are estimates, not guarantees.",
    journalistCta: "Journalists, verify before informing your readers",
    openJournalistSpace: "Open the journalist area",
    resultsDisclaimer: "Results are estimates and do not provide an absolute guarantee of truth.",
    loginTitle: "Journalist",
    loginTitleHighlight: "area",
    email: "Email",
    emailPlaceholder: "you@newsroom.mg",
    password: "Password",
    pressCard: "Press card",
    uploadPressCard: "Upload your press card",
    pressCardFormats: "Front side, PNG, JPG, or PDF",
    signIn: "Sign in",
    verifyTab: "Verify",
    myChecks: "My checks",
    signOut: "Sign out",
    true: "TRUE",
    false: "FALSE",
    doubtful: "UNCERTAIN",
    urlSource: "URL link",
    imageSource: "Image",
    verifyNow: "Verify now,",
    shareLater: "share later",
    verifyIntro: "Paste an article or post link, or upload a screenshot. No account is required.",
    screenshot: "Screenshot",
    dropImage: "Drop your image here",
    screenshotFormats: "PNG, JPG — screenshot",
    analyzing: "Analyzing…",
    startVerification: "Start verification",
    extracting: "Extracting content",
    searchingSources: "Searching sources",
    analyzingWithAi: "AI analysis",
    resultPlaceholder: "Your result will appear here.",
    likelyReliable: "Likely reliable information",
    useCaution: "Information to treat with caution",
    likelyMisleading: "Likely misleading information",
    sampleJustification: "Example rationale: several sources were compared. Some confirm the main facts, while others add context to the figures cited.",
    analyzedSource: "Analyzed source:",
    scoreDisclaimer: "This percentage is an estimate, not a guarantee.",
  },
} as const;

export type TranslationKey = keyof typeof messages.fr;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return value !== null && languages.some((language) => language === value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");
  const [hasLoadedPreference, setHasLoadedPreference] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("ny-marina-language");
    if (isLanguage(savedLanguage)) setLanguageState(savedLanguage);
    setHasLoadedPreference(true);
  }, []);

  useEffect(() => {
    if (!hasLoadedPreference) return;
    document.documentElement.lang = language;
    window.localStorage.setItem("ny-marina-language", language);
  }, [hasLoadedPreference, language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: setLanguageState,
      t: (key) => messages[language][key],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}

export function LanguageSelect({ className = "" }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <label className={`inline-flex items-center gap-2 text-sm ${className}`}>
      <span className="sr-only">{t("language")}</span>
      <select
        aria-label={t("language")}
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        className="cursor-pointer rounded-xl border border-current/20 bg-transparent px-3 py-2 text-current outline-none transition hover:bg-current/10 focus-visible:ring-2 focus-visible:ring-primary"
      >
        <option value="mg" className="bg-background text-foreground">Malagasy</option>
        <option value="fr" className="bg-background text-foreground">Français</option>
        <option value="en" className="bg-background text-foreground">English</option>
      </select>
    </label>
  );
}
