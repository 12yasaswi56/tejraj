const publicationsData = [
    {
        title: "Biosensor materials: An introduction",
        year: 2025,
        doi: "https://doi.org/10.1016/B978-0-443-21676-3.00007-8",
      },
      {
        title: "Laser-induced graphene (LIG): Fabrication, challenges, and opportunities",
        year: 2025,
        doi: "https://doi.org/10.1016/B978-0-443-21676-3.00011-X",
      },
      {
        title: "Unlocking the potential of quinoline-based glycopolymers for photoreforming hydrogen production",
        year: 2025,
        doi: "https://doi.org/10.1016/j.apcatb.2025.125225",
      },
      {
        title: "Photocatalytic degradation of simazine using 3D-printed Nb2CTx/UiO-66@rGQDs nanocatalyst",
        year: 2025,
        doi: "https://doi.org/10.1016/j.apcatb.2025.125232",
      },
      {
        title: "Microbial biotechnology alchemy: Transforming bacterial cellulose into sensing disease - A review",
        year: 2025,
        doi: "https://doi.org/10.1016/j.sintl.2023.100277",
      },
      {
        title: "Emerging nanotechnologies in adsorption of dyes: a comprehensive review of carbon and metal oxide-based nanomaterials",
        year: 2025,
        doi: "https://doi.org/10.1007/s10450-024-00588-y",
      },
      {
        title: "Photogenerated charge carriers in photocatalytic materials for solar hydrogen evolution",
        year: 2025,
        doi: "https://doi.org/10.1016/j.coche.2024.101087",
      },
      {
        title: "High-performance supercapacitors based on NiMn layered double hydroxides/Ni3S2 nanocomposite",
        year: 2025,
        doi: "https://doi.org/10.1016/j.jpowsour.2025.236465",
      },
      {
        title: "Recycling strategies for renewable graphite and other carbon nanomaterials from used batteries: A review",
        year: 2025,
        doi: "https://doi.org/10.1016/j.jclepro.2025.144871",
      },
      {
        title: "Mechanistic Analysis of Photocatalytic Transformation of Naphthalene Using a Nano-O-doped-g-C3N4-CuO np Heterojunction",
        year: 2025,
        doi: "https://doi.org/10.1016/j.psep.2025.106794",
      },
      {
        title: "TiO2 nanotubes as an efficient green catalyst for the multi-component synthesis of blue light emissive pyrazolyl-thaizole based fluorophores",
        year: 2025,
        doi: "https://doi.org/10.1016/j.nanoso.2025.101439",
      },
      {
        title: "Photocatalytic self-Fenton degradation of tetracycline over Z-scheme functionalized g-C3N4/CeO2/Bi2S3 hydrogel beads",
        year: 2025,
        doi: "https://doi.org/10.1016/j.cej.2025.159470",
      },
      {
        title: "Degradation of azo dye (direct red 89) using H2O2/periodate process-parameter optimization",
        year: 2025,
        doi: "https://doi.org/10.1016/j.chemosphere.2024.143977",
      },
      {
        title: "Chiral plasmonic Au@ Pt nanoparticles for detection of H2O2 and Hg2+ and enantiomeric differentiation",
        year: 2025,
        doi: "https://doi.org/10.1016/j.jenvman.2024.123561",
      },
      {
        title: "Nanosensors in the food industry and agriculture",
        year: 2025,
        doi: "https://doi.org/10.1016/B978-0-443-21592-6.00015-X",
      },
      {
        title: "Biosensors: History and classifications",
        year: 2025,
        doi: "https://doi.org/10.1016/B978-0-443-21658-9.00007-3",
      },
      {
        title: "Microfluidic-based nanobiosensors: perception, materials, and challenges",
        year: 2025,
        doi: "https://doi.org/10.1016/B978-0-443-21658-9.02005-2",
      },
      {
        title: "Self-healing polyurethane/cellulose nanocrystal composite fibers with fatigue and aging resistance for smart wearable elastic yarns",
        year: 2025,
        doi: "https://doi.org/10.1007/s42114-024-01089-w",
      },
      {
        title: "Co3O4-RuO2/Ti3C2Tx MXene Electrocatalysts for Oxygen Evolution Reaction in Acidic and Alkaline Media",
        year: 2024,
        doi: "https://doi.org/10.1002/cssc.202402270",
      },
      {
        title: "Recent Plasmonic Gold-and Silver-Assisted Raman Spectra for Advanced SARS-CoV-2 Detection",
        year: 2024,
        doi: "https://doi.org/10.1021/acsabm.4c01457",
      },
      {
        title: "Metal-organic frameworks avenues in microbial electrochemical systems as a sustainable approach to waste treatment and bioenergy generation",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.158766",
      },
      {
        title: "Integrating 3D printed Mo2CTx-UiO-66@rGQDs nanocatalysts with semiconducting BiVO4 to improve interfacial charge transfer and photocatalytic degradation of atrazine",
        year: 2024,
        doi: "https://doi.org/10.1016/j.apcatb.2024.124924",
      },
      {
        title: "Dengue-virosensor: advancement of dengue virus-based biosensors",
        year: 2024,
        doi: "https://doi.org/10.1039/D4SD00262H",
      },
      {
        title: "3D printed monolithic nanocomposites as adsorbents to remove Congo red and mercury (Ⅱ) from wastewater",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.157710",
      },
      {
        title: "Synthesis of novel 2D g-C3N4/3D CoSe2 hierarchical microflower-like hybrids for high-performance energy-storage applications",
        year: 2024,
        doi: "https://doi.org/10.1016/j.est.2024.114577",
      },
      {
        title: "Fluoro-polymer/TiO2 based photocatalysts for hydrogen generation",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.157584",
      },
      {
        title: "Photocatalytic degradation of organophosphorus pesticide (terbufos) in aqueous solutions using 3D printed TaSe2/g-C3N4 nanocomposites",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.157469",
      },
      {
        title: "Exploring the potential of MXene nanohybrids as high-performance anode materials for lithium-ion batteries",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.157317",
      },
      {
        title: "Ternary g-C3N4/Co3O4/CeO2 nanostructured composites for electrochemical energy storage supercapacitors",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2024.122996",
      },
      {
        title: "Photocatalytic materials for solar-driven hydrogen generation",
        year: 2024,
        doi: "https://doi.org/10.1016/j.coche.2024.101055",
      },
      {
        title: "Self-supporting FeCoNiCuTiGa High-Entropy Alloy Electrodes for Alkaline Hydrogen and Oxygen Evolution Reactions: Experimental and Theoretical Insights",
        year: 2024,
        doi: "https://doi.org/10.1021/acsaem.4c01036",
      },
      {
        title: "One-pot hydrothermal synthesis of 3D garland BiOI, spherical ZnO, and CNFs onto Ni foam: Supercapacitor performance with enhanced electrochemical properties",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2024.122841",
      },
      {
        title: "Removal of nitrogen from wastewater: Unsolved problems and possible solutions with partial denitrification/anammox systems",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.156131",
      },
      {
        title: "Tailoring Sb-F doped ZnO nanoparticles for dual-functionality: Photocatalytic and supercapacitor applications",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.155720",
      },
      {
        title: "Effective removal of perfluorooctanoic acid from water using PVA@ UiO-66-NH2/GO composite materials via adsorption",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2024.122248",
      },
      {
        title: "Water recovery and treatment of spent filter backwash from drinking water using chemical reactor ultrafiltration process",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jwpe.2024.105895",
      },
      {
        title: "Biobased Heterogeneous Renewable Catalysts: Production Technologies, Innovations, Biodiesel applications and Circular Bioeconomy",
        year: 2024,
        doi: "https://doi.org/10.1016/j.envres.2024.119745",
      },
      {
        title: "Biochar-enhanced bioremediation of eutrophic waters impacted by algal blooms",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2024.122044",
      },
      {
        title: "Concomitant inhibitor-tolerant cellulase and xylanase production towards sustainable bioethanol production by Zasmidiumcellare CBS 146.36",
        year: 2024,
        doi: "https://doi.org/10.1016/j.fuel.2024.132593",
      },
      {
        title: "Recent progress in ionic liquid-based green emulsion liquid membranes for separation of industrial discharges",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.154309",
      },
      {
        title: "Metal–organic frameworks: Design, synthesis, properties, and energy storage applications",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.154294",
      },
      {
        title: "Green synthesis of novel Zn0.5Ni0.5FeCrO4 spinel magnetic nanoparticles: photodegradation of 4-nitrophenol and aniline under visible light irradiation",
        year: 2024,
        doi: "https://doi.org/10.1016/j.envpol.2024.124534",
      },
      {
        title: "Adsorption and Storage of Hydrogen-A Computational Model Approach",
        year: 2024,
        doi: "https://doi.org/10.1016/j.envres.2024.119606",
      },
      {
        title: "Advanced protein nanobiosensors to in-situ detect hazardous material in the environment",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2024.121727",
      },
      {
        title: "Phosphorous recovery from sewage sludge via chemical and thermal technologies",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.153869",
      },
      {
        title: "Biogenically synthesized porous TiO2 nanostructures for advanced anti-bacterial, electrochemical, and photocatalytic applications",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2024.121728",
      },
      {
        title: "Low-energy electrochemical CO2-amine desorption driven by the proton-coupled electron transfer reaction (PCET)",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.153217",
      },
      {
        title: "Recent advances in microbial fuel cell technology for energy generation from wastewater sources",
        year: 2024,
        doi: "https://doi.org/10.1016/j.psep.2024.06.077",
      },
      {
        title: "Biomass-MOF composites in wastewater treatment, air purification, and electromagnetic radiation adsorption – A review",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.152932",
      },
      {
        title: "3D printed porous chitosan/metal–organic framework composites as effective adsorbents to remove heavy metals from wastewater",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.152780",
      },
      {
        title: "Emerging technologies for the removal of pesticides from contaminated soils and their reuse in agriculture",
        year: 2024,
        doi: "https://doi.org/10.1016/j.chemosphere.2024.142433",
      },
      {
        title: "Heterostructured Nanocoral-like Co(OH)F@NiCo-LDH/Co9S8 Nanocomposites as Electrodes for Supercapacitors",
        year: 2024,
        doi: "https://doi.org/10.1021/acsanm.4c01226",
      },
      {
        title: "A comprehensive model analysis of activity coefficients and thermodynamic properties of EAE-1DMA2P blended solvent",
        year: 2024,
        doi: "https://doi.org/10.1016/j.ces.2024.120271",
      },
      {
        title: "Tailoring the surface functional groups of biochar for enhanced adsorption and degradation of pharmaceutically active compounds",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.152037",
      },
      {
        title: "Nondestructive analysis of plastic debris from micro to nano sizes: A state-of-the-art review on Raman spectroscopy-based techniques",
        year: 2024,
        doi: "https://doi.org/10.1016/j.trac.2024.117750",
      },
      {
        title: "Unique effect of bromide ion on intensification of advanced oxidation processes for pollutants removal: a systematic review",
        year: 2024,
        doi: "https://doi.org/10.1016/j.envpol.2024.124136",
      },
      {
        title: "Paradigm of Integrative OMICS of Microbial Technology Towards Biorefinery Prospects",
        year: 2024,
        doi: "https://doi.org/10.1016/j.bcab.2024.103226",
      },
      {
        title: "Chemical dealloying derived nanoporous FeCoNiCuTi high-entropy bifunctional electrocatalysts for highly efficient overall water splitting under alkaline conditions",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.152145",
      },
      {
        title: "Modeling approach for Ti3C2 MXene-based fluorescent aptasensor for amoxicillin biosensing in water matrices",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2024.121072",
      },
      {
        title: "Synthesis and biological properties of novel glucose-based macromolecular architectures",
        year: 2024,
        doi: "https://doi.org/10.1016/j.ijbiomac.2024.131724",
      },
      {
        title: "Sweat permeable and ultrahigh strength 3D PVDF piezoelectric nanoyarn fabric strain sensor",
        year: 2024,
        doi: "https://doi.org/10.1038/s41467-024-47810-7",
      },
      {
        title: "Green Synthesis of Nyctanthes arbor-tristis Flower-decorated Gold Nanoparticles: Sustainable Approaches for Enhancing Antimicrobial and Supercapacitor Performance",
        year: 2024,
        doi: "https://doi.org/10.1016/j.psep.2024.04.099",
      },
      {
        title: "Trends on barrier characteristics improvement of emerging biopolymeric composite films using nanoparticles - A review",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jtice.2024.105488",
      },
      {
        title: "Mussel-inspired fabrication of fouling-resistant PPSU-based nanocomposite membrane using polydopamine and tannic acid-functionalized CeO2 nanoparticles towards effective oil-water emulsions separation",
        year: 2024,
        doi: "https://doi.org/10.1016/j.seppur.2024.127610",
      },
      {
        title: "Harnessing artificial intelligence-driven approach for enhanced indole-3-acetic acid from the newly isolated Streptomyces rutgersensis AW08",
        year: 2024,
        doi: "https://doi.org/10.1016/j.envres.2024.118933",
      },
      {
        title: "Membrane-based removal of fluoride from groundwater",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.150880",
      },
      {
        title: "Efficient H2O2-sonochemical treatment of Penicillin G in water: Optimization, modeling, DI HRMS ultra-trace by-products analysis, and degradation pathways",
        year: 2024,
        doi: "https://doi.org/10.1016/j.psep.2024.03.051",
      },
      {
        title: "Visible light-assisted S-scheme p-and n-type semiconductors anchored onto graphene for increased photocatalytic H2 production via water splitting",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.150399",
      },
      {
        title: "Effective removal of organic substances and nutrients using microgranular sludge in a sequential batch reactor",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jwpe.2024.105080",
      },
      {
        title: "A review of hyaluronic acid-based therapeutics for the treatment and management of arthritis",
        year: 2024,
        doi: "https://doi.org/10.1016/j.ijbiomac.2024.130645",
      },
      {
        title: "Controllable synthesis of nanostructured flower-like cadmium sulfides for photocatalytic degradation of methyl orange under different light sources",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jwpe.2024.105002",
      },
      {
        title: "New insights on the decolorization of waste flows by Saccharomyces cerevisiae strain–A systematic review",
        year: 2024,
        doi: "https://doi.org/10.1016/j.envres.2024.118398",
      },
      {
        title: "3D Printed WO3-UiO-66@ reduced graphene oxide nanocomposites for photocatalytic degradation of sulfamethoxazole",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.149277",
      },
      {
        title: "Enhanced combustion of toluene on bimetallic-organic frameworks Fe-doped Mn2O3 nanoparticles",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.149589",
      },
      {
        title: "Tunable Near-Infrared II Photosensitive Platforms of Plasmonic Ring Nanocone Arrays",
        year: 2024,
        doi: "https://doi.org/10.1021/acsanm.3c04376",
      },
      {
        title: "Detection of Perfluorooctanoic and Perfluorodecanoic Acids on a Graphene-Based Electrochemical Sensor Aided by Computational Simulations",
        year: 2024,
        doi: "https://doi.org/10.1021/acs.langmuir.3c03666",
      },
      {
        title: "Adsorptive and photocatalytic degradation of imidacloprid pesticide from wastewater via the fabrication of ZIF-CdS/Tpy quantum dots",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.148983",
      },
      {
        title: "Microbial carbon capture-Evolving trends, interconnections, and recent spotlights of the past three decades",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2024.148970",
      },
      {
        title: "Efficient synthesis of 3D ZnO nanostructures on ITO surfaces for enhanced photoelectrochemical water splitting",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2024.120082",
      },
      {
        title: "Fused chromeno-pyrano-pyrimidinediones: Multi-component green synthesis and electrochemical properties",
        year: 2024,
        doi: "https://doi.org/10.1016/j.molliq.2024.123950",
      },
      {
        title: "Microbial biotechnology alchemy: Transforming bacterial cellulose into sensing disease-A review",
        year: 2024,
        doi: "https://doi.org/10.1016/j.sintl.2023.100277",
      },
      {
        title: "Novel rod-like [Cu(phen)2(OAc)]·PF6 complex for high-performance visible-light-driven photocatalytic degradation of hazardous organic dyes: DFT approach, Hirshfeld and fingerprint plot analysis",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2023.119545",
      },
      {
        title: "Mesoporous bimetallic S-doped nanoparticles prepared via hydrothermal method for enhanced photodegradation of 4-chlorophenol",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2023.119460",
      },
      {
        title: "NiFe-PANI composites synthesized by electrodeposition for enhanced photocatalytic degradation of diclofenac sodium from wastewater",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2023.119487",
      },
      {
        title: "Wastewater treatment using nanodiamond and related materials",
        year: 2024,
        doi: "https://doi.org/10.1016/j.jenvman.2023.119349",
      },
      {
        title: "Highly thermally heat-resistant polymeric membranes for sustainable water and wastewater treatment",
        year: 2024,
        doi: "https://doi.org/10.1016/j.rser.2023.113902",
      },
      {
        title: "Novel plasmonic Z‐scheme-based photocatalysts and electrochemical aptasensor for the degradation and determination of epirubicin",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2023.148307",
      },
      {
        title: "Amine-functionalized UiO-66 incorporated electrospun cellulose/chitosan porous nanofiber membranes for removing copper ions",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2023.148077",
      },
      {
        title: "CO2 capture from flue gas using EAE-1DMA2P solvent in a packed column",
        year: 2024,
        doi: "https://doi.org/10.1016/j.cej.2023.147918",
      },
      {
        title: "Novel biocompatible polymer-modified liposome nanoparticles for biomedical applications",
        year: 2024,
        doi: "https://doi.org/10.1007/s00289-023-04731-7",
      },
      {
        title: "A novel porous lignocellulosic standing hierarchical hydroxyapatite for enhanced aqueous copper (II) removal",
        year: 2024,
        doi: "https://doi.org/10.1016/j.scitotenv.2023.168873",
      },
      {
        title: "Microalgae-enhanced bioremediation of Cr (VI) ions using spent coffee ground-derived magnetic biochar MoS2–Ag composites",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2023.119259",
      },
      {
        title: "Protein-polysaccharide nanoconjugates: Potential tools for delivery of plant-derived nutraceuticals",
        year: 2023,
        doi: "https://doi.org/10.1016/j.foodchem.2023.136709",
      },
      {
        title: "Synthesis of 1D/2D VO2 (B) nanowire/g-C3N4 hybrid architectures as cathode materials for high-performance Li-ion batteries",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.146786",
      },
      {
        title: "Lignocellulosic biomass-based glycoconjugates for diverse biotechnological applications",
        year: 2023,
        doi: "https://doi.org/10.1016/j.biotechadv.2023.108209",
      },
      {
        title: "Emerging trends and advances in valorization of lignocellulosic biomass to biofuels",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2023.118527",
      },
      {
        title: "Mn3O4/activated carbon nanocomposites for adsorptive removal of methylene blue",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.145903",
      },
      {
        title: "Green ammonia to Hydrogen: Reduction and oxidation catalytic processes",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.145661",
      },
      {
        title: "Carbon emissions and decarbonisation: The role and relevance of fermentation industry in chemical sector",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.146308",
      },
      {
        title: "Flower-like nanocomposite of carbon quantum dots, MoS2, and dendritic Ag-based Z-scheme type photocatalysts for effective tartrazine degradation",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.145239",
      },
      {
        title: "Emerging two-dimensional (2D) MXene-based nanostructured materials: Synthesis strategies, properties, and applications as efficient pseudo-supercapacitors",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.144913",
      },
      {
        title: "Emerging technologies and sustainable strategies for municipal solid waste valorization: Challenges of circular economy implementation",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jclepro.2023.138708",
      },
      {
        title: "Corrigendum to “Waste organic dye removal using MOF-based electrospun nanofibers of high amine density”",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.143973",
      },
      {
        title: "UiO-66-NH2/chitosan with microalgae platform for gold valorization from waste microelectronics",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.144467",
      },
      {
        title: "Conversion technologies for valorization of hemp lignocellulosic biomass for potential biorefinery applications",
        year: 2023,
        doi: "https://doi.org/10.1016/j.seppur.2023.124018",
      },
      {
        title: "Microplastics and biobased polymers to combat plastics waste",
        year: 2023,
        doi: "https://doi.org/10.1016/j.chemosphere.2023.140000",
      },
      {
        title: "Photocatalytic degradation of four emerging antibiotic contaminants and toxicity assessment in wastewater: A comprehensive study",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2023.116132",
      },
      {
        title: "CdS/TiO2 nano hybrid heterostructured materials for superior hydrogen production and gas sensor applications",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2023.117895",
      },
      {
        title: "MXenes as Li-Ion Battery Electrodes: Progress and Outlook",
        year: 2023,
        doi: "https://doi.org/10.1021/acs.energyfuels.3c01346",
      },
      {
        title: "Towards a sustainable transformation of municipal wastewater treatment plants into biofactories using advanced NH3-N recovery technologies: A review",
        year: 2023,
        doi: "https://doi.org/10.1016/j.scitotenv.2023.166077",
      },
      {
        title: "Innovative electrochemical synthesis of highly defective Ta2O5/Cu2O nanotubes inactivating bacteria under low-intensity solar irradiation",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.143769",
      },
      {
        title: "Adsorptive removal of malachite green using novel GO@ ZnO-NiFe2O4-αAl2O3 nanocomposites",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.144485",
      },
      {
        title: "Photocatalytic degradation of metronidazole and oxytetracycline by novel l-Arginine (C, N codoped)-TiO2/g-C3N4",
        year: 2023,
        doi: "https://doi.org/10.1016/j.chemosphere.2023.139282",
      },
      {
        title: "Magnetic Nitrogen-Rich UiO-66 Metal–Organic Framework: An Efficient Adsorbent for Water Treatment",
        year: 2023,
        doi: "https://doi.org/10.1021/acsami.3c02171",
      },
      {
        title: "Valorization of environmental-burden waste towards microalgal metabolites production",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2023.115320",
      },
      {
        title: "Z-scheme driven photocatalytic activity of CNTs-integrated Bi2S3/WO3 nanohybrid catalysts for highly efficient hydrogen evolution under solar light irradiation",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.142886",
      },
      {
        title: "Water-soluble PEG segmented mannose-based macromolecules: Synthesis, characterization and their biocompatibility",
        year: 2023,
        doi: "https://doi.org/10.1016/j.ijbiomac.2023.124119",
      },
      {
        title: "Heterostructured 2D/2D ZnIn2S4/g-C3N4 nanohybrids for photocatalytic degradation of antibiotic sulfamethoxazole and photoelectrochemical properties",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2023.115585",
      },
      {
        title: "Essential characteristics improvement of metallic nanoparticles loaded carbohydrate polymeric films - A review",
        year: 2023,
        doi: "https://doi.org/10.1016/j.ijbiomac.2023.124803",
      },
      {
        title: "Cost effective porous areca nut carbon nanospheres for adsorptive removal of dyes and their binary mixtures",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2023.115521",
      },
      {
        title: "Waste organic dye removal using MOF-based electrospun nanofibers of high amine density",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.143119",
      },
      {
        title: "Photocatalytic CO2 capture on plasmonic copper nanoparticles in a biofluidic channel",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.142135",
      },
      {
        title: "Degradation of 2,4-diclorophenol via coupling zero valent iron and hydrodynamic cavitation for sulfite activation: A turbulence modeling",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2023.117295",
      },
      {
        title: "Sharp-edged pencil type ZnO flowers and BiOI flakes combined with carbon nanofibers as heterostructured hybrid photocatalysts for the removal of hazardous pollutants from contaminated water",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2023.117397",
      },
      {
        title: "Novel 2D sulfur-doped V2O5 flakes and their applications in photoelectrochemical water oxidation and high-performance energy storage supercapacitors",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.141935",
      },
      {
        title: "Sustainability insights into the synthesis of engineered nanomaterials - Problem formulation and considerations",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2023.115249",
      },
      {
        title: "Novel biocompatible polymer-modified liposome nanoparticles for biomedical applications",
        year: 2023,
        doi: "https://doi.org/10.1007/s00289-023-04731-7",
      },
      {
        title: "Activation of persulfate using copper oxide nanoparticles for the degradation of Rhodamine B containing effluents: Degradation efficiency and ecotoxicological studies",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2022.139799",
      },
      {
        title: "Biofabricated growth kinetics and macromolecule production potential of food and agri-wastes as a D. armatus nutrient media",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2023.115320",
      },
      {
        title: "Cobalt-doped V2O5 hexagonal nanosheets for superior photocatalytic toxic pollutants degradation, Cr (VI) reduction, and photoelectrochemical water oxidation performance",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2022.114923",
      },
      {
        title: "Photocatalytic activity of visible-light-driven L-Proline-TiO2/BiOBr nanostructured materials for dyes degradation: The role of generated reactive species",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2022.116691",
      },
      {
        title: "Hydrothermally derived Cr-doped SnO2 nanoflakes for enhanced photocatalytic and photoelectrochemical water oxidation performance under visible light irradiation",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2022.114672",
      },
      {
        title: "Isoporous catalytic ceramic membranes for ultrafast contaminants elimination through boosting confined radicals",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2022.140872",
      },
      {
        title: "Electrosorption of phenolic compounds by carbon sheet electrode from zinc chloride functionalized activated carbon from pomegranate husk",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2022.140800",
      },
      {
        title: "Novel rhombus Co3O4-nanocapsule CuO heterohybrids for efficient photocatalytic water splitting and electrochemical energy storage applications",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2022.116650",
      },
      {
        title: "Bifunctional g-C3N4/carbon nanotubes/WO3 ternary nanohybrids for photocatalytic energy and environmental applications",
        year: 2023,
        doi: "https://doi.org/10.1016/j.chemosphere.2022.137030",
      },
      {
        title: "Highly efficient photodegradation of toxic organic pollutants using Cu-doped V2O5 nanosheets under visible light",
        year: 2023,
        doi: "https://doi.org/10.1016/j.chemosphere.2022.137015",
      },
      {
        title: "Efficient adsorptive removal of ciprofloxacin and carbamazepine using modified pinewood biochar–A kinetic, mechanistic study",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2022.137896",
      },
      {
        title: "SiO2-supported HClO4 catalyzed synthesis of (Z)-thiazolylhydrazonoindolin-2ones and their electrochemical properties",
        year: 2022,
        doi: "https://doi.org/10.1016/j.chemosphere.2022.136667",
      },
      {
        title: "Synthesis of transition metal ions doped-ZrO2 nanoparticles supported g-C3N4 hybrids for solar light-induced photocatalytic removal of methyl orange and tetracycline pollutants",
        year: 2022,
        doi: "https://doi.org/10.1016/j.chemosphere.2022.136414",
      },
      {
        title: "New combination of pulsed light and iron (II) for carbonate radical production to enhanced degradation of bisphenol A: Parameter optimization and degradation pathway",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.116059",
      },
      {
        title: "Design, synthesis and computational approach to study novel pyrrole scaffolds as active inhibitors of enoyl ACP reductase (InhA) and Mycobacterium tuberculosis antagonists",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jics.2022.100674",
      },
      {
        title: "Materials discovery of ion-selective membranes using artificial intelligence",
        year: 2022,
        doi: "https://doi.org/10.1038/s42004-02200744-x",
      },
      {
        title: "Fouling mechanisms in ultrafiltration under constant flux: Effect of feed spacer design",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2022.136563",
      },
      {
        title: "Glucose-based carbon electrode for trace-level detection of acetaminophen",
        year: 2022,
        doi: "https://doi.org/10.1002/elsa.202100117",
      },
      {
        title: "The identification of byproducts from the catalytic reduction reaction of 4-nitrophenol to 4-aminophenol: A systematic spectroscopic study",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.115292",
      },
      {
        title: "Efficient removal of heavy metal ions from aqueous media by unmodified and modified nanodiamonds",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.115214",
      },
      {
        title: "Glowing combustion synthesis, characterization and biomedical properties of Sr-hardystonite (Sr2ZnSi2O7) powders",
        year: 2022,
        doi: "https://doi.org/10.1016/j.ceramint.2022.05.013",
      },
      {
        title: "Molecular Docking and Three‐Dimensional Quantitative Structure–Activity Relationships for Antitubercular Pyrimidine Derivatives",
        year: 2021,
        doi: "https://doi.org/10.1080/10406638.2021.1885455",
      },
      {
        title: "g-C3N4 nanosheets functionalized yttrium-doped ZrO2 nanoparticles for efficient photocatalytic Cr(VI) reduction and energy storage applications",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.115120",
      },
      {
        title: "Synthesis of bis-1,3-(benz)azoles catalyzed by palladium-PEPPSI complex-based catalysts and the study of photophysical properties",
        year: 2022,
        doi: "https://doi.org/10.1016/j.chemosphere.2022.134751",
      },
      {
        title: "Direct red 89 dye degradation by advanced oxidation process using sulfite and zero valent under ultraviolet irradiation: Toxicity assessment and adaptive neuro-fuzzy inference systems modeling",
        year: 2022,
        doi: "https://doi.org/10.1016/j.envres.2022.113059",
      },
      {
        title: "Eco-friendly rice husk derived biochar as a highly efficient noble Metal-Free cocatalyst for high production of H2 using solar light irradiation",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2022.134743",
      },
      {
        title: "Hafnium doped tungsten oxide intercalated carbon matrix for electrochemical detection of perfluorooctanoic acid",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2022.134700",
      },
      {
        title: "A mixed matrix polyimide ultrafiltration membrane for efficient removal of bentazon from water",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2022.134596",
      },
      {
        title: "Graphene/g-carbon nitride (GO/g-C3N4) nanohybrids as a sensor material for the detection of methyl parathion and carbendazim",
        year: 2022,
        doi: "https://doi.org/10.1016/j.chemosphere.2021.133450",
      },
      {
        title: "Polydopamine-coated graphene oxide nanosheets embedded in sulfonated poly (ether sulfone) hybrid UF membranes with superior antifouling properties for water treatment",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2021.133526",
      },
      {
        title: "Nanostructured graphitic carbon nitride (g-C3N4)-CTAB modified electrode for the highly sensitive detection of amino-triazole and linuron herbicides",
        year: 2022,
        doi: "https://doi.org/10.1016/j.envres.2021.111856",
      },
      {
        title: "Novel edge-capped ZrO2 nanoparticles onto V2O5 nanowires for efficient photosensitized reduction of chromium (Cr (VI)), photoelectrochemical solar water splitting, and electrochemical energy storage applications",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2021.132988",
      },
      {
        title: "Novel Z-scheme binary zinc tungsten oxide/nickel ferrite nanohybrids for photocatalytic reduction of chromium (Cr (VI)), photoelectrochemical water splitting and degradation of toxic organic pollutants",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jhazmat.2021.127044",
      },
      {
        title: "A new insight into catalytic ozonation of sulfasalazine antibiotic by plasma-treated limonite nanostructures: Experimental, modeling and mechanism",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2021.131230",
      },
      {
        title: "Azo dye containing wastewater treatment in earthen membrane based unplanted two chambered constructed wetlands-microbial fuel cells: A new design for enhanced performance",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2021.131856",
      },
      {
        title: "Acclimatized activated sludge for enhanced phenolic wastewater treatment using pinewood biochar",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2021.131708",
      },
      {
        title: "Efficient microwave-assisted production of furanics and hydrochar from bamboo (Phyllostachys nigra “Boryana”) in a biphasic reaction system: effect of inorganic salts",
        year: 2022,
        doi: "https://doi.org/10.1007/s13399-021-01372-6",
      },
      {
        title: "Synergetic degradation of atenolol by hydrodynamic cavitation coupled with sodium persulfate as zero-waste discharge process: Effect of coexisting anions",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2021.129163",
      },
      {
        title: "Hf-Doped Tungsten Oxide Nanorods as Electrode Materials for Electrochemical Detection of Paracetamol and Salbutamol",
        year: 2022,
        doi: "https://doi.org/10.1021/acsanm.1c03853",
      },
      {
        title: "Anaerobic membrane bioreactor for the production of bioH2: electron flow, fouling modeling and kinetic study",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2021.130716",
      },
      {
        title: "Detection of ketorolac drug using pencil graphite electrode",
        year: 2021,
        doi: "https://doi.org/10.1016/j.bea.2021.100009",
      },
      {
        title: "Synthesis of novel Co3O4 nanocubes-NiO octahedral hybrids for electrochemical energy storage supercapacitors",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2021.113484",
      },
      {
        title: "Application of UV/chlorine processes for the DR83: 1 degradation from wastewater: Effect of coexisting anions",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2021.113349",
      },
      {
        title: "Synthesis of ruthenium doped titanium dioxide nanoparticles for the electrochemical detection of diclofenac sodium",
        year: 2021,
        doi: "https://doi.org/10.1016/j.molliq.2021.116891",
      },
      {
        title: "Interrelation between sulphur and conductive materials and its impact on ammonium and organic pollutants removal in constructed wetlands-microbial fuel cells",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jhazmat.2021.126417",
      },
      {
        title: "Artificial intelligence modeling to predict transmembrane pressure in anaerobic membrane bioreactor-sequencing batch reactor during biohydrogen production",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2021.112759",
      },
      {
        title: "Gram-scale synthesis of ZnS/NiO core-shell hierarchical nanostructures and their enhanced H2 production in crude glycerol and sulphide wastewater",
        year: 2021,
        doi: "https://doi.org/10.1016/j.envres.2021.111323",
      },
      {
        title: "In-vitro evaluation of antioxidant and anticholinesterase activities of novel pyridine, quinoxaline and s-triazine derivatives",
        year: 2021,
        doi: "https://doi.org/10.1016/j.envres.2021.111320",
      },
      {
        title: "Advanced oxidation of 4-chlorophenol via combined pulsed light and sulfate radicals methods: Effect of co-existing anions",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2021.112595",
      },
      {
        title: "Nanostructured materials via green sonochemical routes-Sustainability aspects",
        year: 2021,
        doi: "https://doi.org/10.1016/j.chemosphere.2021.130146",
      },
      {
        title: "Synthesis and anticancer activity of thiadiazole containing thiourea, benzothiazole and imidazo [2, 1-b][1, 3, 4] thiadiazole scaffolds",
        year: 2021,
        doi: "https://doi.org/10.2174/1573406416666200519085626",
      },
      {
        title: "Monodispersed core/shell nanospheres of ZnS/NiO with enhanced H2 generation and quantum efficiency at versatile photocatalytic conditions",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jhazmat.2021.125359",
      },
      {
        title: "Photocatalytic hydrogen production by ternary heterojunction composites of silver nanoparticles doped FCNT- TiO2",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2021.112130",
      },
      {
        title: "Enhanced removal of humic acid from aqueous solution by combined alternating current electrocoagulation and sulfate radical",
        year: 2021,
        doi: "https://doi.org/10.1016/j.envpol.2021.116632",
      },
      {
        title: "Adsorption of 4-chlorophenol by magnetized activated carbon from pomegranate husk using dual stage chemical activation",
        year: 2021,
        doi: "https://doi.org/10.1016/j.chemosphere.2020.128623",
      },
      {
        title: "Ultrasmall zinc oxide nanosheets anchored onto sodium bismuth sulfide nanoribbons as solar-driven photocatalysts for removal of toxic pollutants and photoelectrocatalytic water oxidation",
        year: 2021,
        doi: "https://doi.org/10.1016/j.chemosphere.2020.128559",
      },
      {
        title: "A novel sensor based on WO3· 0.33 H2O nanorods modified electrode for the detection and degradation of herbicide, carbendazim",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111611",
      },
      {
        title: "Ethylenediamine-functionalized Zr-based MOF for efficient removal of heavy metal ions from water",
        year: 2021,
        doi: "https://doi.org/10.1016/j.chemosphere.2020.128466",
      },
      {
        title: "Synthesis of Ca-doped ZnO nanoparticles and its application as highly efficient electrochemical sensor for the determination of anti-viral drug, acyclovir",
        year: 2021,
        doi: "https://doi.org/10.1016/j.molliq.2020.114552",
      },
      {
        title: "Competitive adsorption of phenol and toluene onto silica-supported transition metal clusters for biofuel purification",
        year: 2021,
        doi: "https://doi.org/10.1039/D1ME00046B",
      },
      {
        title: "Metal nitrides and graphitic carbon nitrides as novel photocatalysts for hydrogen production and environmental remediation",
        year: 2021,
        doi: "https://doi.org/10.1007/978-3-030-72076-6_19",
      },
      {
        title: "Aluminum-based metal-organic frameworks for adsorptive removal of anti-cancer (methotrexate) drug from aqueous solutions",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111448",
      },
      {
        title: "Photocatalytic hydrogen production from dye contaminated water and electrochemical supercapacitors using carbon nanohorns and TiO2 nanoflower heterogeneous catalysts",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111433",
      },
      {
        title: "Optimization of kraft black liquor treatment using ultrasonically synthesized mesoporous tenorite nanomaterials assisted by Taguchi design",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2020.126040",
      },
      {
        title: "Modern approaches in separation, identification and quantification of polychlorinated biphenyls",
        year: 2020,
        doi: "https://doi.org/10.1016/j.coesh.2020.06.003",
      },
      {
        title: "Electrocatalytic detection of herbicide, amitrole at WO3· 0.33 H2O modified carbon paste electrode for environmental applications",
        year: 2020,
        doi: "https://doi.org/10.1016/j.scitotenv.2020.140691",
      },
      {
        title: "Impact of scale, activation solvents, and aged conditions on gas adsorption properties of UiO-66",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111155",
      },
      {
        title: "Superior Chemical Stability of UiO-66 metal-organic frameworks (MOFs) for Selective Dye Adsorption",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2020.125346",
      },
      {
        title: "Retention of atenolol from single and binary aqueous solutions by thin film composite nanofiltration membrane: Transport modeling and pore radius estimation",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111005",
      },
      {
        title: "Ultrasonication and electrochemically-assisted synthesis of reduced graphene oxide nanosheets for electrochemical sensor applications",
        year: 2020,
        doi: "https://doi.org/10.1016/j.flatc.2020.100183",
      },
      {
        title: "Synergistic degradation of 4-chlorophenol by persulfate and oxalic acid mixture with heterogeneous Fenton like system for wastewater treatment: Adaptive neuro-fuzzy inference systems modeling",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.110678",
      },
      {
        title: "Z-scheme binary 1D ZnWO4 nanorods decorated 2D NiFe2O4 nanoplates as photocatalysts for high efficiency photocatalytic degradation of toxic organic pollutants from wastewater",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.110677",
      },
      {
        title: "In silico Docking and 3D-QSAR Studies of Novel N’-substituted-(pyrrolyl-phenoxy) Acetohydrazides as Enoyl-ACP Reductase Antagonists",
        year: 2020,
        doi: "N/A",
      },
      {
        title: "ZnO nanosheets-decorated Bi2WO6 nanolayers as efficient photocatalysts for the removal of toxic environmental pollutants and photoelectrochemical solar water oxidation",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.110504",
      },
      {
        title: "Hetero-nanostructured iron oxide and bentonite clay composite assembly for the determination of an antiviral drug acyclovir",
        year: 2020,
        doi: "https://doi.org/10.1016/j.microc.2020.104727",
      },
      {
        title: "The role of ferric coagulant on gypsum scaling and ion interception efficiency in nanofiltration at different pH values: Performance and mechanism",
        year: 2020,
        doi: "https://doi.org/10.1016/j.watres.2020.115695",
      },
      {
        title: "Copper-doped ZrO2 nanoparticles as high-performance catalysts for efficient removal of toxic organic pollutants and stable solar water oxidation",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.110088",
      },
      {
        title: "Textile waste, dyes/inorganic salts separation of cerium oxide-loaded loose nanofiltration polyethersulfone membranes",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2019.123787",
      },
      {
        title: "Single precursor sonochemical synthesis of mesoporous hexagonal-shape zero-valent copper for effective nitrate reduction",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2019.123359",
      },
      {
        title: "Adsorption behaviour of powdered activated carbon to control capacitive deionization fouling of organic matter",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2019.123277",
      },
      {
        title: "Novel ruthenium doped TiO2/reduced graphene oxide hybrid as highly selective sensor for the determination of ambroxol",
        year: 2020,
        doi: "https://doi.org/10.1016/j.molliq.2019.112368",
      },
      {
        title: "Removal of manganese from groundwater in the ripened sand filtration: biological oxidation versus chemical autocatalytic oxidation",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2019.123033",
      },
      {
        title: "Treatment technologies for pharmaceutical effluents-A scientometric study",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2019.109800",
      },
      {
        title: "Highly efficient solar light-driven photocatalytic hydrogen production over Cu/FCNTs-titania quantum dots-based heterostructures",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2019.109747",
      },
      {
        title: "Corrigendum to “Highly efficient solar light-driven photocatalytic hydrogen production over Cu/FCNTs-titania quantum dots-based heterostructures”",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111863",
      },
      {
        title: "Mechanisms and modelling of phosphorus solid–liquid transformation during the hydrothermal processing of swine manure",
        year: 2020,
        doi: "https://doi.org/10.1039/D0GC01281E",
      },
      {
        title: "Efficient removal of toxic organic dyes and photoelectrochemical properties of iron-doped zirconia nanoparticles",
        year: 2020,
        doi: "https://doi.org/10.1016/j.chemosphere.2019.124766",
      },
      {
        title: "Nanocarbons-Supported and Polymers-Supported Titanium Dioxide Nanostructures as Efficient Photocatalysts for Remediation of Contaminated Wastewater and Hydrogen Production",
        year: 2020,
        doi: "https://doi.org/10.1007/978-3-030-12619-3_6",
      },
      {
        title: "Enhanced biodegradation of phenolic wastewaters with acclimatized activated sludge–A kinetic study",
        year: 2019,
        doi: "https://doi.org/10.1016/j.cej.2019.122186",
      },
      {
        title: "Carbon cloth-based hybrid materials as flexible electrochemical supercapacitors",
        year: 2019,
        doi: "https://doi.org/10.1002/celc.201901122",
      },
      {
        title: "Fabrication of ZnO nanoparticles modified sensor for electrochemical oxidation of methdilazine",
        year: 2019,
        doi: "https://doi.org/10.1016/j.apsusc.2019.143656",
      },
      {
        title: "Chemical synthesis, molecular modeling and pharmacophore mapping of new pyrrole derivatives as inhibitors of InhA enzyme and Mycobacterium tuberculosis growth",
        year: 2019,
        doi: "https://doi.org/10.1007/s00044-019-02418-1",
      },
      {
        title: "Nanostructured silver doped TiO2/CNTs hybrid as an efficient electrochemical sensor for detection of anti-inflammatory drug, cetirizine",
        year: 2019,
        doi: "https://doi.org/10.1016/j.microc.2019.104124",
      },
      {
        title: "Photocatalytic recovery of H2 from H2S containing wastewater: surface and interface control of photo-excitons in Cu2S@ TiO2 core-shell nanostructures",
        year: 2019,
        doi: "https://doi.org/10.1016/j.apcatb.2019.04.090",
      },
      {
        title: "ZnO-based nanostructured electrodes for electrochemical sensors and biosensors in biomedical applications",
        year: 2019,
        doi: "https://doi.org/10.1016/j.bios.2019.111417",
      },
      {
        title: "Electro sensing base for herbicide aclonifen at graphitic carbon nitride modified carbon electrode – Water and soil sample analysis",
        year: 2019,
        doi: "https://doi.org/10.1016/j.microc.2019.103976",
      },
      {
        title: "A novel electrochemical sensor for detection of molinate using ZnO nanoparticles loaded carbon electrode",
        year: 2019,
        doi: "https://doi.org/10.1002/elan.201800775",
      },
      {
        title: "Electrochemical behavior of flufenamic acid at amberlite XAD-4 resin and silver-doped titanium dioxide/amberlite XAD-4 resin modified carbon electrodes",
        year: 2019,
        doi: "https://doi.org/10.1016/j.colsurfb.2019.02.022",
      },
      {
        title: "Electrochemical detection and degradation of textile dye Congo red at graphene oxide modified electrode",
        year: 2019,
        doi: "https://doi.org/10.1016/j.microc.2019.01.033",
      },
      {
        title: "Sensors based on ruthenium-doped TiO2 nanoparticles loaded into multi-walled carbon nanotubes for the detection of flufenamic acid and mefenamic acid",
        year: 2019,
        doi: "https://doi.org/10.1016/j.aca.2018.11.041",
      },
      {
        title: "Electro-Catalytic Behavior of Mg-Doped ZnO Nano-Flakes for Oxidation of Anti-Inflammatory Drug",
        year: 2019,
        doi: "https://doi.org/10.1149/2.0131909jes",
      },
      {
        title: "Photocatalysis of graphene and carbon nitride-based functional carbon quantum dots",
        year: 2019,
        doi: "https://doi.org/10.1016/B978-0-12-813926-4.00035-5",
      },
      {
        title: "Pharmacophore mapping, molecular docking, chemical synthesis of some novel pyrrolyl benzamide derivatives and evaluation of their inhibitory activity against enoyl-ACP reductase (InhA) and Mycobacterium tuberculosis",
        year: 2018,
        doi: "https://doi.org/10.1016/j.bioorg.2018.08.035",
      },
      {
        title: "Cellulose acetate butyrate bilayer coated microspheres for controlled release of ciprofloxacin",
        year: 2018,
        doi: "https://doi.org/10.1007/s00289-017-2092-1",
      },
      {
        title: "Review on biomass gasification: Gasifiers, gasifying mediums, and operational parameters",
        year: 2018,
        doi: "https://doi.org/10.1016/j.mset.2021.08.009",
      },
      {
        title: "Emerging trends and advances in valorization of lignocellulosic biomass to biofuels",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2023.118527",
      },
      {
        title: "Conversion technologies for valorization of hemp lignocellulosic biomass for potential biorefinery applications",
        year: 2023,
        doi: "https://doi.org/10.1016/j.seppur.2023.124018",
      },
      {
        title: "Perovskites: A new generation electrode materials for storage applications",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jpowsour.2023.233166",
      },
      {
        title: "Efficient NH3-N recovery from municipal wastewaters via membrane hybrid systems: Nutrient-Energy-Water (NEW) nexus in circular economy",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2023.142876",
      },
      {
        title: "Production of bioactive phenolic compounds from agricultural byproducts towards bioeconomic perspectives",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jclepro.2023.137460",
      },
      {
        title: "Polymeric hydrogels-based materials for wastewater treatment",
        year: 2023,
        doi: "https://doi.org/10.1016/j.chemosphere.2023.138743",
      },
      {
        title: "Environmental sustainability of toxic arsenic ions removal from wastewater using electrodeionization",
        year: 2023,
        doi: "https://doi.org/10.1016/j.seppur.2023.123897",
      },
      {
        title: "Valorization of biowastes for clean energy production, environmental depollution and soil fertility",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jenvman.2023.117410",
      },
      {
        title: "A Short Review on Miniaturized Biosensors for the Detection of Nucleic Acid Biomarkers",
        year: 2023,
        doi: "https://doi.org/10.3390/bios13030412",
      },
      {
        title: "Pathway towards the commercialization of sustainable microbial fuel cell-based wastewater treatment technologies",
        year: 2023,
        doi: "https://doi.org/10.1016/j.rser.2022.113095",
      },
      {
        title: "Recent advances in sustainable N-heterocyclic carbene-Pd (II)-pyridine (PEPPSI) catalysts: A review",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envres.2023.115515",
      },
      {
        title: "Recent Advances in Microfluidics-Based Electrochemical Sensors for Foodborne Pathogen Detection",
        year: 2023,
        doi: "https://doi.org/10.3390/bios13020246",
      },
      {
        title: "Phase dependent performance of MoS2 for supercapacitor applications",
        year: 2023,
        doi: "https://doi.org/10.1016/j.est.2022.106321",
      },
      {
        title: "Treatment technologies for removal of per-and polyfluoroalkyl substances (PFAS) in biosolids",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2022.139964",
      },
      {
        title: "Valorization of microalgae biomass for the development of green biorefinery: perspectives on techno-economic analysis and the way towards sustainability",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2022.139754",
      },
      {
        title: "Recent advances in consolidated bioprocessing for conversion of lignocellulosic biomass into bioethanol–a review",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2022.139783",
      },
      {
        title: "Adsorptive behavior of micro (nano) plastics through biochar: Co-existence, consequences, and challenges in contaminated ecosystems",
        year: 2023,
        doi: "https://doi.org/10.1016/j.scitotenv.2022.159097",
      },
      {
        title: "Microbial electrochemical bioremediation of petroleum hydrocarbons (PHCs) pollution: Recent advances and outlook",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2022.139372",
      },
      {
        title: "Aquaporin‐Based Biomimetic Membranes for Low Energy Water Desalination and Separation Applications",
        year: 2023,
        doi: "https://doi.org/10.1002/adfm.202213326",
      },
      {
        title: "Recent developments in MoS2-based flexible supercapacitors",
        year: 2023,
        doi: "https://doi.org/10.1016/j.mtchem.2022.101333",
      },
      {
        title: "Metal-organic frameworks: A promising option for the diagnosis and treatment of Alzheimer's disease",
        year: 2023,
        doi: "https://doi.org/10.1016/j.jconrel.2022.11.002",
      },
      {
        title: "A waste-based circular economy approach for phycoremediation of X-ray developer solution",
        year: 2023,
        doi: "https://doi.org/10.1016/j.envpol.2022.120530",
      },
      {
        title: "Sustainable bioelectrochemical systems for bioenergy generation via waste treatment from petroleum industries",
        year: 2023,
        doi: "https://doi.org/10.1016/j.fuel.2022.125632",
      },
      {
        title: "Process strategies to reduce cellulase enzyme loading for renewable sugar production in biorefineries",
        year: 2023,
        doi: "https://doi.org/10.1016/j.cej.2022.138690",
      },
      {
        title: "Sustainable production of biosurfactants via valorisation of industrial wastes as alternate feedstocks",
        year: 2022,
        doi: "https://doi.org/10.1016/j.chemosphere.2022.137326",
      },
      {
        title: "Recent advances in the removal of dyes from wastewater using low-cost adsorbents",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.115981",
      },
      {
        title: "Carbon credit reduction: A techno-economic analysis of “drop-in” fuel production",
        year: 2022,
        doi: "https://doi.org/10.1016/j.envpol.2022.120507",
      },
      {
        title: "A systematic review of clay-based photocatalysts for emergent micropollutants removal and microbial inactivation from aqueous media: status and limitations",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jece.2022.108813",
      },
      {
        title: "Recent Advancements in Nanobiosensors: Current Trends, Challenges, Applications, and Future Scope",
        year: 2022,
        doi: "https://doi.org/10.3390/bios12100892",
      },
      {
        title: "Green hydrogen production via photo-reforming of bio-renewable resources",
        year: 2022,
        doi: "https://doi.org/10.1016/j.rser.2022.112827",
      },
      {
        title: "Leveraging the potential of silver nanoparticles-based materials towards sustainable water treatment",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.115675",
      },
      {
        title: "Removal of hexavalent chromium via biochar-based adsorbents: State-of-the-art, challenges, and future perspectives",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.115356",
      },
      {
        title: "Versatile Carbon Nanofiber-Based Sensors",
        year: 2022,
        doi: "https://doi.org/10.1021/acsabm.2c00599",
      },
      {
        title: "Biosensors and Microfluidic Biosensors: From Fabrication to Application",
        year: 2022,
        doi: "https://doi.org/10.3390/bios12070543",
      },
      {
        title: "Two-dimensional ultrathin metal-based nanosheets for photocatalytic CO2 conversion to solar fuels",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.114916",
      },
      {
        title: "Biomarkers for early diagnosis of ovarian carcinoma",
        year: 2022,
        doi: "https://doi.org/10.1021/acsbiomaterials.2c00390",
      },
      {
        title: "A critical review on suitability and catalytic production of butyl levulinate as a blending molecule for green diesel",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2022.137550",
      },
      {
        title: "Catalytic production and application of bio-renewable butyl butyrate as jet fuel blend-A review",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2022.114772",
      },
      {
        title: "Based microfluidic devices for food adulterants: Cost-effective technological monitoring systems",
        year: 2022,
        doi: "https://doi.org/10.1016/j.foodchem.2022.133173",
      },
      {
        title: "Novel insights into Anammox-based processes: A critical review",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2022.136534",
      },
      {
        title: "Valorisation of lignocellulosic biomass to value-added products: Paving the pathway towards low-carbon footprint",
        year: 2022,
        doi: "https://doi.org/10.1016/j.fuel.2021.122678",
      },
      {
        title: "UiO-66 Metal-Organic Frameworks in Water Treatment: A Critical Review",
        year: 2022,
        doi: "https://doi.org/10.1016/j.pmatsci.2021.100904",
      },
      {
        title: "Sustainable downstream separation of itaconic acid using carbon-based adsorbents",
        year: 2022,
        doi: "https://doi.org/10.1155/2022/7333005",
      },
      {
        title: "Maltose-based methacrylated polymer architectures and their biocompatibility",
        year: 2022,
        doi: "https://doi.org/10.1016/j.mtchem.2021.100669",
      },
      {
        title: "Engineered biochar: A way forward to environmental remediation",
        year: 2022,
        doi: "https://doi.org/10.1016/j.fuel.2021.122510",
      },
      {
        title: "Bioelectrochemical systems-based metal recovery: Resource, conservation and recycling of metallic industrial effluents",
        year: 2022,
        doi: "https://doi.org/10.1016/j.envres.2021.112346",
      },
      {
        title: "Skin Patchable Sensor Surveillance for Continuous Glucose Monitoring",
        year: 2022,
        doi: "https://doi.org/10.1021/acsabm.1c01289",
      },
      {
        title: "Engineered nanomaterials in microbial fuel cells–Recent developments, sustainability aspects, and future outlook",
        year: 2022,
        doi: "https://doi.org/10.1016/j.fuel.2021.122347",
      },
      {
        title: "Electrochemical sensors for the detection of SARS-CoV-2 virus",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2021.132966",
      },
      {
        title: "Remediation of per- and polyfluoroalkyls (PFAS) via electrochemical methods",
        year: 2022,
        doi: "https://doi.org/10.1016/j.cej.2021.132895",
      },
      {
        title: "Environmental management of industrial decarbonization with focus on chemical sectors: A review",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2021.114055",
      },
      {
        title: "Hydrogen production technologies-Membrane based separation, storage and challenges",
        year: 2022,
        doi: "https://doi.org/10.1016/j.jenvman.2021.113963",
      },
      {
        title: "Biochar for soil applications-sustainability aspects, challenges and future prospects",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2021.131189",
      },
      {
        title: "Versatile Graphitized Carbon Nanofibers in Energy Applications",
        year: 2022,
        doi: "https://doi.org/10.1021/acssuschemeng.1c06762",
      },
      {
        title: "Integrated biorefinery processes for conversion of lignocellulosic biomass to value added materials: Paving a path towards circular economy",
        year: 2022,
        doi: "https://doi.org/10.1016/j.biortech.2021.126151",
      },
      {
        title: "Drug delivery using interpenetrating polymeric networks of natural polymers: A recent update",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jddst.2021.102915",
      },
      {
        title: "Photocatalytic Carbon Dioxide Reduction: Exploring the Role of Ultrathin 2D Graphitic Carbon Nitride (g-C3N4)",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2021.131402",
      },
      {
        title: "Photocatalytic conversion of CO2 into valuable products using emerging two-dimensional graphene-based nanomaterials: A step towards sustainability",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2021.131401",
      },
      {
        title: "Simultaneous detection and removal of fluoride from water using smart metal-organic framework-based adsorbents",
        year: 2021,
        doi: "https://doi.org/10.1016/j.ccr.2021.214037",
      },
      {
        title: "Photocatalytic water splitting hydrogen production via environmental benign carbon-based nanomaterials",
        year: 2021,
        doi: "https://doi.org/10.1016/j.ijhydene.2021.07.187",
      },
      {
        title: "Identification and removal of micro-and nano-plastics: Efficient and cost-effective methods",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2021.129816",
      },
      {
        title: "Biochar in water and wastewater treatment-A sustainability assessment",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2021.129946",
      },
      {
        title: "Electrochemical investigations for COVID-19 detection-A comparison with other viral detection methods",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2020.127575",
      },
      {
        title: "Metal chalcogenide-based core/shell photocatalysts for solar hydrogen production: Recent advances, properties and technology challenges",
        year: 2021,
        doi: "https://doi.org/10.1016/j.jhazmat.2021.125588",
      },
      {
        title: "Artificial intelligence as a sustainable tool in wastewater treatment using membrane bioreactors",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2020.128070",
      },
      {
        title: "Point of care detection of COVID-19: Advancement in biosensing and diagnostic methods",
        year: 2021,
        doi: "https://doi.org/10.1016/j.cej.2021.128759",
      },
      {
        title: "Versatile fullerenes as sensor materials",
        year: 2021,
        doi: "https://doi.org/10.1016/j.mtchem.2021.100454",
      },
      {
        title: "Sustainable MXenes-based membranes for highly energy-efficient separations",
        year: 2021,
        doi: "https://doi.org/10.1016/j.rser.2021.110878",
      },
      {
        title: "Recent advances and viability in biofuel production",
        year: 2021,
        doi: "https://doi.org/10.1016/j.ecmx.2020.100070",
      },
      {
        title: "Synthesis of different biofuels from livestock waste materials and their potential as sustainable feedstocks–A review",
        year: 2021,
        doi: "https://doi.org/10.1016/j.enconman.2021.114038",
      },
      {
        title: "Next generation polymers of intrinsic microporosity with tunable moieties for ultrahigh permeation and precise molecular CO2 separation",
        year: 2021,
        doi: "https://doi.org/10.1016/j.pecs.2021.100903",
      },
      {
        title: "Biomass utilization and production of biofuels from carbon neutral materials",
        year: 2021,
        doi: "https://doi.org/10.1016/j.envpol.2021.116731",
      },
      {
        title: "Microplastics in the Environment: Occurrence, Perils, and Eradication",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2020.127317",
      },
      {
        title: "Advances in transition metal dichalcogenide-based two-dimensional nanomaterials",
        year: 2021,
        doi: "https://doi.org/10.1016/j.mtchem.2020.100399",
      },
      {
        title: "Conventional and Nanotechnology-Based Sensing Methods for SARS Coronavirus (2019-nCoV)",
        year: 2021,
        doi: "https://doi.org/10.1021/acsabm.0c01545",
      },
      {
        title: "A review on multicomponent reactions catalysed by zero-dimensional/one-dimensional titanium dioxide (TiO2) nanomaterials: Promising green methodologies in organic chemistry",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111603",
      },
      {
        title: "2D/2D heterojunction of MoS2/g-C3N4 nanoflowers for enhanced visible-light-driven photocatalytic and electrochemical degradation of organic pollutants",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111208",
      },
      {
        title: "Forward osmosis for industrial effluents treatment–sustainability considerations",
        year: 2021,
        doi: "https://doi.org/10.1016/j.seppur.2020.117568",
      },
      {
        title: "Acetal containing polymers as pH-responsive nano-drug delivery systems",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jconrel.2020.09.044",
      },
      {
        title: "Waste-to-Energy Nexus: A Sustainable Development",
        year: 2020,
        doi: "https://doi.org/10.1016/j.envpol.2020.115501",
      },
      {
        title: "Sustainable environmental management and related biofuel technologies",
        year: 2020,
        doi: "https://doi.org/10.1016/j.jenvman.2020.111096",
      },
      {
        title: "Scientometric Analysis and Scientific Trends on Biochar Application as Soil Amendment",
        year: 2020,
        doi: "https://doi.org/10.1016/j.cej.2020.125128",
      },
      {
        title: "Corrigendum to “Molecular insights and novel approaches for targeting tumor metastasis”",
        year: 2020,
        doi: "https://doi.org/10.1016/j.ijpharm.2020.119967",
      },
      {
        title: "Molecular insights and novel approaches for targeting tumor metastasis",
        year: 2020,
        doi: "https://doi.org/10.1016/j.ijpharm.2020.119556",
      },
      {
        title: "Hetero-nanostructured metal oxide-based hybrid photocatalysts for enhanced photoelectrochemical water splitting–A review",
        year: 2020,
        doi: "https://doi.org/10.1016/j.ijhydene.2019.02.109",
      },
      {
        title: "Biofuels, biodiesel and biohydrogen production using bioprocesses. A review",
        year: 2020,
        doi: "https://doi.org/10.1007/s10311-020-00999-7",
      },
      {
        title: "Waste-to-energy nexus for circular economy and environmental protection: Recent trends in hydrogen energy",
        year: 2020,
        doi: "https://doi.org/10.1016/j.scitotenv.2020.136633",
      },
      {
        title: "Sustainable energy from waste organic matters via efficient microbial processes",
        year: 2020,
        doi: "https://doi.org/10.1016/j.scitotenv.2020.137927",
      },
      {
        title: "In Silico ADME and QSAR Studies on a Set of Coumarin Derivatives As Acetylcholinesterase Inhibitors Against Alzheimer’s Disease: CoMFA, CoMSIA, Topomer CoMFA, and HQSAR",
        year: 2020,
        doi: "https://doi.org/10.2174/1570180816666190712095907",
      },
      {
        title: "Skin-Patchable Electrodes for Biosensor Applications: A Review",
        year: 2020,
        doi: "https://doi.org/10.1021/acsbiomaterials.9b01659",
      },
      {
        title: "Metal-organic frameworks (MOFs)-based efficient heterogeneous photocatalysts: synthesis, properties and its applications in photocatalytic hydrogen generation, CO2 reduction and photodegradation of organic dyes",
        year: 2020,
        doi: "https://doi.org/10.1016/j.ijhydene.2019.02.144",
      },
      {
        title: "Indians vs. COVID-19: The scenario of health",
        year: 2020,
        doi: "https://doi.org/10.1016/j.sintl.2020.100038",
      },
      {
        title: "The COVID-19 paradox: Impact on India and developed nations of the world",
        year: 2020,
        doi: "https://doi.org/10.1016/j.sintl.2020.100026",
      },
      {
        title: "Recent trends in functionalized nanoparticles loaded polymeric composites: An energy application",
        year: 2020,
        doi: "https://doi.org/10.1016/j.mset.2020.05.005",
      },
      {
        title: "Current treatment protocol for COVID-19 in India",
        year: 2020,
        doi: "https://doi.org/10.1016/j.sintl.2020.100013",
      },
      {
        title: "Invasion of novel coronavirus (COVID-19) in Indian territory",
        year: 2020,
        doi: "https://doi.org/10.1016/j.sintl.2020.100012",
      },
      {
        title: "Recent developments in ionic liquid-based electrolytes for energy storage supercapacitors and rechargeable batteries",
        year: 2020,
        doi: "https://doi.org/10.1016/B978-0-12-817386-2.00007-X",
      },
      {
        title: "Band Gap Tuning and Surface Modification of Carbon Dots for Sustainable Environmental Remediation and Photocatalytic Hydrogen Production–A Review",
        year: 2019,
        doi: "https://doi.org/10.1016/j.jenvman.2019.109486",
      },
      {
        title: "A review of pharmacological and clinical studies on the application of Shenling Baizhu San in treatment of Ulcerative colitis",
        year: 2019,
        doi: "https://doi.org/10.1016/j.jep.2019.112105",
      },
      {
        title: "Sustainable hydrogen production for the greener environment by quantum dots-based efficient photocatalysts: A review",
        year: 2019,
        doi: "https://doi.org/10.1016/j.jenvman.2019.07.017",
      },
      {
        title: "Industrial biowastes treatment using membrane bioreactors (MBRs)–a scientometric study",
        year: 2019,
        doi: "https://doi.org/10.1016/j.jenvman.2019.06.066",
      },
      {
        title: "Underground carbon dioxide sequestration for climate change mitigation–A scientometric study",
        year: 2019,
        doi: "https://doi.org/10.1016/j.jcou.2019.05.022",
      },
      {
        title: "Sustainability of treatment technologies for industrial biowastes effluents",
        year: 2019,
        doi: "https://doi.org/10.1016/j.cej.2019.04.010",
      },
      {
        title: "Graphitic carbon nitride (g-C3N4)-based metal-free photocatalysts for water splitting: A review",
        year: 2019,
        doi: "https://doi.org/10.1016/j.carbon.2019.04.104",
      },
      {
        title: "Membranes for dehydration of alcohols via pervaporation",
        year: 2019,
        doi: "https://doi.org/10.1016/j.jenvman.2019.04.043",
      },
      {
        title: "Sustainability considerations in membrane-based technologies for industrial effluents treatment",
        year: 2019,
        doi: "https://doi.org/10.1016/j.cej.2019.02.075",
      },
      {
        title: "Nanostructured titanium oxide hybrids-based electrochemical biosensors for healthcare applications",
        year: 2019,
        doi: "https://doi.org/10.1016/j.colsurfb.2019.03.013",
      },
      {
        title: "Polymeric graphitic carbon nitride (g-C3N4)-based semiconducting nanostructured materials: synthesis methods, properties and photocatalytic applications",
        year: 2019,
        doi: "https://doi.org/10.1016/j.jenvman.2019.02.075",
      },
      {
        title: "A review on frontiers in plasmonic nanophotocatalysts for hydrogen production",
        year: 2019,
        doi: "https://doi.org/10.1016/j.ijhydene.2019.02.120",
      },
      {
        title: "Novel anisotropic ordered polymeric materials based on metallopolymer precursors as dye-sensitized solar cells",
        year: 2019,
        doi: "https://doi.org/10.1016/j.cej.2018.10.090",
      },
      {
        title: "Polychlorinated biphenyls (PCBs) in the environment: recent updates on sampling, pretreatment, cleanup technologies and their analysis",
        year: 2019,
        doi: "https://doi.org/10.1016/j.cej.2018.09.205",
      },
      {
        title: "Membrane-based separation of potential emerging pollutants",
        year: 2019,
        doi: "https://doi.org/10.1016/j.seppur.2018.09.003",
      },
      {
        title: "Electrode materials for lithium-ion batteries",
        year: 2018,
        doi: "https://doi.org/10.1016/j.mset.2018.08.001",
      },
      {
        title: "Stimuli-responsive peptide-based biomaterials as drug delivery systems",
        year: 2018,
        doi: "https://doi.org/10.1016/j.cej.2018.07.126",
      },
      {
        title: "Nature engineered diatom biosilica as drug delivery systems",
        year: 2018,
        doi: "https://doi.org/10.1016/j.jconrel.2018.05.013",
      },
      {
        title: "Effect of electron beam irradiation induced grafting of sialic acid onto polycaprolactone–Feasibility study",
        year: 2018,
        doi: "https://doi.org/10.1016/j.mset.2018.03.001",
      },
      {
        title: "Nanomedicine: An effective tool in cancer therapy",
        year: 2018,
        doi: "https://doi.org/10.1016/j.ijpharm.2018.02.007",
      },
      {
        title: "Constructed Wetlands for the Elimination of Pharmaceutically Active Compounds; Fundamentals and Prospects",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-20806-5_7",
      },
      {
        title: "Techniques for the Detection, Quantifications, and Identification of Pharmaceutically Active Compounds and Their Removal Mechanisms",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-20806-5_2",
      },
      {
        title: "Pharmaceutically Active Compounds in Water Bodies—Occurrence, Fate, and Toxicity",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-20806-5_1",
      },
      {
        title: "Heterogeneous Advanced Oxidation Processes (HE-AOPs) for the Removal of Pharmaceutically Active Compounds—Pros and Cons",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-20806-5_11",
      },
      {
        title: "Membrane Separation Technologies for the Elimination of Pharmaceutically Active Compounds—Progress and Challenges",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-208065_8",
      },
      {
        title: "Homogeneous Advanced Oxidation Processes for the Removal of Pharmaceutically Active Compounds—Current Status and Research Gaps",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-20806-5_10",
      },
      {
        title: "Microbial Fuel Cells for the Bioelectricity Generation from Effluents Containing Pharmaceutically Active Compounds",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-208065_6",
      },
      {
        title: "Pharmaceutically Active Compounds in Anaerobic Digestion Processes—Biodegradation and Fate",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-20806-5_5",
      },
      {
        title: "Adsorptive Techniques for the Removal of Pharmaceutically Active Compounds—Materials and Mechanisms",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-208065_9",
      },
      {
        title: "Pharmaceutically Active Compounds in Activated Sludge Systems—Presence, Fate, and Removal Efficiency",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-20806-5_4",
      },
      {
        title: "Removal of Pharmaceutically Active Compounds in Water Bodies—Science History and Research Hotspots",
        year: 2023,
        doi: "https://doi.org/10.1007/978-3-031-20806-5_3",
      },
      {
        title: "Inorganic-based nanotheranostics: current status and challenges",
        year: 2023,
        doi: "https://doi.org/10.1016/B978-0-323-85784-0.00018-2",
      },
      {
        title: "Polymer-based nanotheranostics: current status and challenges",
        year: 2023,
        doi: "https://doi.org/10.1016/B978-0-323-85656-0.00027-9",
      },
      {
        title: "Polysaccharide-based polyelectrolyte complex systems for biomedical uses",
        year: 2020,
        doi: "https://doi.org/10.1016/B978-0-12-821344-5.00007-2",
      },
      {
        title: "Biomedical applications of polysaccharides",
        year: 2020,
        doi: "https://doi.org/10.1016/B978-0-12-821344-5.00012-6",
      },
      {
        title: "Uses of tailored polysaccharides in dentistry",
        year: 2020,
        doi: "https://doi.org/10.1016/B978-0-12-821344-5.00012-6",
      },
      {
        title: "Sodium alginate in drug delivery and biomedical areas",
        year: 2019,
        doi: "https://doi.org/10.1016/B978-0-12-817055-7.00003-0",
      },
      {
        title: "Chemical synthesis and in silico molecular modeling of novel pyrrolyl benzohydrazide derivatives: Their biological evaluation against enoyl ACP reductase (InhA) and Mycobacterium tuberculosis",
        year: 2017,
        doi: "",
      },
      {
        title: "Polymeric micelles: Basic research to clinical practice",
        year: 2017,
        doi: "",
      },
      {
        title: "Microfluidic based analytical devices for colorimetric detection of toxic ions: A review",
        year: 2017,
        doi: "https://doi.org/10.1016/j.trac.2017.06.005",
      },
      {
        title: "3D-QSAR and Molecular Docking Studies of Pyrazole Derivatives as Inhibitors of Enoyl Acyl Carrier Protein Reductase from Mycobacterium tuberculosis",
        year: 2017,
        doi: "h",
      },
      {
        title: "Blend hydrogel microspheres of carboxymethyl chitosan and gelatin for the controlled release of 5-fluorouracil",
        year: 2017,
        doi: "",
      },
      {
        title: "Synthesis, biological evaluation and in silico molecular modeling of pyrrolyl benzohydrazide derivatives as enoyl ACP reductase inhibitors",
        year: 2017,
        doi: "",
      },
      {
        title: "Pyrrolyl Pyrazoline Carbaldehydes as Enoyl-ACP Reductase Inhibitors: Design, Synthesis and Antitubercular Activity",
        year: 2017,
        doi: "",
      },
      {
        title: "Production of chitosan-based hydrogels for biomedical applications",
        year: 2017,
        doi: "",
      },
      {
        title: "The role of nanotechnology and chitosan-based biomaterials for tissue engineering and therapeutic delivery",
        year: 2017,
        doi: "",
      },
      {
        title: "Synthesis and molecular modeling studies of novel pyrrole analogs as antimycobacterial agents",
        year: 2017,
        doi: "",
      },
      {
        title: "Nano-Enabled Drug Delivery in Cancer Therapy: Literature Analysis Using the MeSH System",
        year: 2016,
        doi: "",
      },
      {
        title: "In vitro cytotoxicity and in vivo efficacy of 5-fluorouracil-loaded enteric-coated PEG-cross-linked chitosan microspheres in colorectal cancer therapy in rats",
        year: 2016,
        doi: "",
      },
      {
        title: "Synthesis, characterization and antitubercular activities of novel pyrrolyl hydrazones and their Cu-complexes",
        year: 2016,
        doi: "",
      },
      {
        title: "Targeted delivery of small interfering RNA to colon cancer cells using chitosan and PEGylated chitosan nanoparticles",
        year: 2016,
        doi: "",
      },
      {
        title: "Drug Resistance of Antitubercular Agents at the Genetic Level in Mycobacterium Species: A Road Map to Drug Development for Counteracting the Resistance",
        year: 2016,
        doi: "",
      },
      {
        title: "Design and development of pyrrole carbaldehyde: an effective pharmacophore for enoyl-ACP reductase",
        year: 2016,
        doi: "",
      },
      {
        title: "Extraction, characterization and gelling behavior enhancement of pectins from the cladodes of Opuntia ficus indica",
        year: 2016,
        doi: "",
      },
      {
        title: "Molecular docking, synthesis, and antimycobacterial activities of pyrrolyl hydrazones and their copper complexes",
        year: 2016,
        doi: "",
      },
      {
        title: "Pyrrole Analogs as Novel Organic Molecules to Combat Tuberculosis",
        year: 2016,
        doi: "",
      },
      {
        title: "In vitro and in vivo assessment of novel pH-sensitive interpenetrating polymer networks of a graft copolymer for gastroprotective delivery of ketoprofen",
        year: 2016,
        doi: "",
      },
      {
        title: "Synthesis, antimycobacterial screening and ligand-based molecular docking studies on novel pyrrole derivatives bearing pyrazoline, isoxazole and phenyl thiourea moieties",
        year: 2016,
        doi: "",
      },
      {
        title: "Polysaccharide-based hydrogels as biomaterials",
        year: 2016,
        doi: "",
      },
      {
        title: "HIF inhibitors: New hope for cancer therapy",
        year: 2015,
        doi: "",
      },
      {
        title: "Design, synthesis of quinolinyl Schiff bases and azetidinones as enoyl ACP-reductase inhibitors",
        year: 2015,
        doi: "",
      },
      {
        title: "Nano-enabled drug delivery systems for brain cancer and Alzheimer’s disease: research patterns and opportunities",
        year: 2015,
        doi: "",
      },
      {
        title: "Oral insulin delivery using deoxycholic acid conjugated PEGylated polyhydroxybutyrate co-polymeric nanoparticles",
        year: 2015,
        doi: "",
      },
      {
        title: "Discovery of target-based novel pyrrolyl phenoxy derivatives as antimycobacterial agents: An in silico approach",
        year: 2015,
        doi: "",
      },
      {
        title: "Controlled release of therapeutics using interpenetrating polymeric networks",
        year: 2015,
        doi: "",
      },
      {
        title: "Synthesis, evaluation and in silico molecular modeling of pyrroyl-1,3,4-thiadiazole inhibitors of InhA",
        year: 2015,
        doi: "",
      },
      {
        title: "Novel pH-sensitive blend microspheres for controlled release of nifedipine–An antihypertensive drug",
        year: 2015,
        doi: "",
      },
      {
        title: "Graphene coated with alumina and its utilization as a thermal conductivity enhancer for alumina sphere/thermoplastic polyurethane composite",
        year: 2015,
        doi: "",
      },
      {
        title: "Blend microspheres of chitosan and polyurethane for controlled release of water-soluble antihypertensive drugs",
        year: 2015,
        doi: "",
      },
      {
        title: "Pyrrolyl thiadiazoles as Mycobacterium tuberculosis inhibitors and their in silico analyses",
        year: 2015,
        doi: "",
      },
      {
        title: "Hydrogen peroxide treated graphene as an effective nanosheet filler for separation application",
        year: 2015,
        doi: "",
      },
      {
        title: "Pharmaceutical applications of various natural gums",
        year: 2015,
        doi: "",
      },
      {
        title: "Polysaccharide-based hydrogels as biomaterials in drug delivery",
        year: 2015,
        doi: "",
      },
      {
        title: "Polysaccharide-based micro/nanohydrogels for delivering macromolecular therapeutics",
        year: 2014,
        doi: "",
      },
      {
        title: "Docking, CoMFA, and CoMSIA analyses of phenoxy triazole derivatives as enoyl-ACP reductase inhibitors for Escherichia coli",
        year: 2014,
        doi: "",
      },
      {
        title: "para-Toluene Sulfonic Acid Treated Clay Loaded Sodium Alginate Membranes for Enhanced Pervaporative Dehydration of Isopropanol",
        year: 2014,
        doi: "",
      },
      {
        title: "3D-QSAR and Molecular Docking Studies of 1,3,4-Oxadiazole Containing Substituted Phenoxy Fragment as Inhibitors of Enoyl Acyl Carrier Protein Reductase from E. coli",
        year: 2014,
        doi: "",
      },
      {
        title: "Functionalized Graphene Sheets Embedded in Chitosan Nanocomposite Membranes for Ethanol and Isopropanol Dehydration via Pervaporation",
        year: 2014,
        doi: "",
      },
      {
        title: "Nitrogen Rich Hyperbranched Polyol via A3+B3 Polycondensation: Thermal, Mechanical, Anti-corrosive and Antimicrobial Properties of Poly(urethane-urea)",
        year: 2014,
        doi: "",
      },
      {
        title: "Inter-Polymer Complex Microspheres of Chitosan and Cellulose Acetate Phathalate for Oral Delivery of 5-Fluorouracil",
        year: 2014,
        doi: "",
      },
      {
        title: "Tunable Mixed Matrix Membranes of Poly(vinyl alcohol) loaded with H-ZSM5 particles for Pervaporation Dehydration of Alcohols: Influence of Silica/Alumina Ratio",
        year: 2014,
        doi: "",
      },
      {
        title: "Biodegradable Polymeric Microspheres of Gelatin and Carboxymethyl Guar Gum for Controlled Release of Theophylline",
        year: 2014,
        doi: "",
      },
      {
        title: "Enoyl ACP Reductase as Effective Target for the Synthesized Novel Antitubercular Drugs: A-State-of-the-Art",
        year: 2014,
        doi: "",
      },
      {
        title: "Novel Blend Microspheres of Poly(3hydroxybutyrate) and Pluronic F68/127 for Controlled Release of 6-Mercaptopurine",
        year: 2014,
        doi: "",
      },
      {
        title: "Guar Gum as a Platform for the Oral Controlled Release of Therapeutics",
        year: 2014,
        doi: "",
      },
      {
        title: "Microspheres of Gelatin and Poly(ethylene glycol) Coated with Ethyl Cellulose for Controlled Release of Metronidazole",
        year: 2014,
        doi: "",
      },
      {
        title: "Novel Blend Microspheres of Cellulose Triacetate and Bee Wax for the Controlled Release of Nateglinide",
        year: 2014,
        doi: "",
      },
      {
        title: "Synthesis and 3D-QSAR studies of some novel class of pyrrole derivatives as antitubercular agents",
        year: 2014,
        doi: "",
      },
      {
        title: "Oral Insulin Therapy for Diabetic Treatment",
        year: 2014,
        doi: "",
      },
      {
        title: "Design, synthesis, molecular docking and 3D-QSAR studies of potent inhibitors of enoyl-acyl carrier protein reductase as potential antimycobacterial agents",
        year: 2014,
        doi: "",
      },
      {
        title: "Microspheres of Poly(vinyl alcohol) and Methyl Cellulose for the Controlled Release of Losartan Potassium and Clopidogrel Bisulphate",
        year: 2014,
        doi: "",
      },
      {
        title: "Pervaporation Separation of Water–Isopropanol Mixtures Using Silicotungstic Acid Loaded Sulfonatedpoly (etherether ketone) Composite Membranes",
        year: 2014,
        doi: "",
      },
      {
        title: "Preparation and Characterization of Novel Polyurethanes Containing 4,4'-{oxy-1,4-diphenyl bis(nitromethylidine)} diphenol Schiffbase diol",
        year: 2014,
        doi: "",
      },
      {
        title: "Two and Three Dimensional-QSAR Studies on a Set of Antimycobacterial Pyrroles: CoMFA, TopomerCoMFA and HQSAR",
        year: 2014,
        doi: "",
      },
      {
        title: "Novel Blend Microspheres of Poly (vinyl alcohol) and Succinyl Chitosan for Controlled Release of Nifedipine",
        year: 2013,
        doi: "",
      },
      {
        title: "Pyrrole: Chemical Synthesis, Microwave Assisted Synthesis and Applications: A Review",
        year: 2013,
        doi: "",
      },
      {
        title: "Exploration of nanocomposite membranes composed of phosphotungstic acid in sodium alginate for separation of aqueous–organic mixtures by pervaporation",
        year: 2013,
        doi: "",
      },
      {
        title: "Cytotoxicity and antitumour activity of 5-fluorouracil-loaded polyhydroxybutyrate and cellulose acetate phthalate blend microspheres",
        year: 2013,
        doi: "",
      },
      {
        title: "Coated Interpenetrating Blend Microparticles of Chitosan and Guar Gum for Controlled Release of Isoniazid",
        year: 2013,
        doi: "",
      },
      {
        title: "Polymeric Blend Nanocomposite Membranes for Ethanol Dehydration-Effect of Morphology and Membrane-Solvent Interactions",
        year: 2013,
        doi: "",
      },
      {
        title: "Polymeric Hydrogels for Oral Insulin Delivery",
        year: 2013,
        doi: "",
      },
      {
        title: "Ultra-small fluorescent bile acid conjugated PHB–PEG block copolymeric nanoparticles: synthesis, characterization and cellular uptake",
        year: 2013,
        doi: "",
      },
      {
        title: "Graphene-loaded Sodium Alginate Nanocomposite Membranes with Enhanced Isopropanol Dehydration Performance via Pervaporation Technique",
        year: 2013,
        doi: "",
      },
      {
        title: "Novel pH- and Temperature-Responsive Blend Microspheres of Sodium Alginate and PNIPAAm-g-GG for Controlled Release of Isoniazid",
        year: 2013,
        doi: "",
      },
      {
        title: "Effect of chain extender and NCO/OH ratio on the properties of hyperbranched polyurethane-urea/imide coatings",
        year: 2012,
        doi: "",
      },
      {
        title: "Novel Composite Blend Microbeads of Sodium Alginate Coated with Chitosan for Controlled Release of Amoxicillin",
        year: 2012,
        doi: "",
      },
      {
        title: "Proton conducting properties of nanocomposite membranes of Chitosan",
        year: 2012,
        doi: "",
      },
      {
        title: "Hyperbranched polyurethane (HBPU)-urea and HBPU-imide coatings: Effect of chain extender and NCO/OH ratio on their properties",
        year: 2012,
        doi: "",
      },
      {
        title: "Characterization of surface-modified montmorillonite nanocomposites",
        year: 2012,
        doi: "",
      },
      {
        title: "Polyacrylonitrile-based Nanofibers-A review on State-of-the Art",
        year: 2012,
        doi: "",
      },
      {
        title: "Ceramic Supported Composite Membranes of Hydroxy Ethyl Cellulose Loaded with Al-MCM-41 for CO2 Separation",
        year: 2012,
        doi: "",
      },
      {
        title: "Highly Water Selective Mixed Matrix Blend Membranes of Poly(Vinyl Alcohol)–Poly(Vinyl Pyrolidone) Incorporating Phosphomolybdic Acid for Application in Pervaporation Assisted Esterification of Acetic Acid with Ethanol",
        year: 2012,
        doi: "",
      },
      {
        title: "Novel Interpenetrating Polymer Network Hydrogel Microspheres of Chitosan and Poly(acrylamide)-grafted-Guar Gum for Controlled Release of Ciprofloxacin",
        year: 2011,
        doi: "",
      },
      {
        title: "Spray Drying Technique to Produce Controlled Release Formulations of Zidovudine-An Anti-HIV Drug",
        year: 2011,
        doi: "",
      },
      {
        title: "Novel Semi-interpenetrating Microspheres of Dextran-grafted-Acrylamide and Poly (Vinyl Alcohol) for Controlled Release of Abacavir Sulfate",
        year: 2011,
        doi: "",
      },
      {
        title: "Colon Targeting of 5-Fluorouracil Using Polyethylene Glycol Cross-linked Chitosan Microspheres Enteric Coated with Cellulose Acetate Phthalate",
        year: 2011,
        doi: "",
      },
      {
        title: "Cyclodextrin-Based siRNA Delivery Nanocarriers: A State-of-the-Art Review",
        year: 2011,
        doi: "",
      },
      {
        title: "Cellulose Acetate-coated α-alumina Ceramic Composite Tubular Membrane for Wastewater Treatment",
        year: 2011,
        doi: "",
      },
      {
        title: "Microspheres of Carboxymethyl Guar Gum for In Vitro Release of Abacavir Sulfate: Preparation and Characterization",
        year: 2011,
        doi: "",
      },
      {
        title: "Prediction of Physical Properties of Nanofiltration Membranes for Natural and Charged Solutes",
        year: 2011,
        doi: "",
      },
      {
        title: "Application of the electrodialytic pilot plant for fluoride removal",
        year: 2011,
        doi: "",
      },
      {
        title: "Novel Hyperbranched Water-borne Polyurethane-Urea/Silica Hybrid Coatings and their Characterizations",
        year: 2011,
        doi: "",
      },
      {
        title: "Blend Microspheres of Poly(3-hydroxybutyrate) and Cellulose Acetate Phthalate for Colon Delivery of 5-Fluorouracil",
        year: 2011,
        doi: "",
      },
      {
        title: "Pervaporation Separation of Water-Ethanol Mixtures Using Organic-Inorganic Nanocomposite Membranes",
        year: 2011,
        doi: "",
      },
      {
        title: "Poly(n-vinylcaprolactam-co-methacrylic acid) hydrogel microparticles for oral insulin delivery",
        year: 2011,
        doi: "",
      },
      {
        title: "pH-sensitive oral insulin delivery systems using Eudragit microspheres",
        year: 2011,
        doi: "",
      },
      {
        title: "Separation of Isopropanol–water Mixtures by Pervaporation using Mixed Matrix Blend Membranes of Poly(vinyl alcohol)/poly(vinyl pyrrolidone) Loaded with Phosphomolybdic Acid",
        year: 2011,
        doi: "",
      },
      {
        title: "Semi-Interpenetrating Polymer Network Hydrogel Blend Microspheres of Gelatin and Hydroxyethyl Cellulose for Controlled Release of Theophylline",
        year: 2011,
        doi: "",
      },
      {
        title: "Microspheres of copolymeric N-vinylpyrrolidone and 2-ethoxyethyl methacrylate for the controlled release of nifedipine",
        year: 2011,
        doi: "",
      },
      {
        title: "Stearic Acid-coated Chitosan-Based Polymer Network Microspheres: Controlled Release Characteristics",
        year: 2011,
        doi: "",
      },
      {
        title: "Formulation and In Vitro Evaluation of Transdermal Delivery of Zidovudine-An Anti-HIV Drug",
        year: 2011,
        doi: "",
      },
      {
        title: "Pore Characteristics and Electrochemical Properties of the Carbon Nanofibers of Polyacrylonitrile Containing Iron-oxide by Electrospinning",
        year: 2011,
        doi: "",
      },
      {
        title: "Randomized, Controlled, Single-Masked Clinical Study to Compare and Evaluate the Efficacy of Microspheres and Gel in Periodontal Pocket Therapy",
        year: 2011,
        doi: "",
      },
      {
        title: "Chitosan as a Carrier for Targeted Delivery of Small Interfering RNA",
        year: 2010,
        doi: "",
      },
      {
        title: "Novel pH-Sensitive Hydrogels Prepared from the Blends of Poly(vinyl alcohol) with Acrylic Acid-graft-Guar Gum Matrixes for Isoniazid Delivery",
        year: 2010,
        doi: "",
      },
      {
        title: "Polymeric Blend Microspheres for Controlled Release of Theophylline",
        year: 2010,
        doi: "",
      },
      {
        title: "Interpenetrating Polymer Network Blend Microspheres of Chitosan and Hydroxyethyl Cellulose for Controlled Release of Isoniazid",
        year: 2010,
        doi: "",
      },
      {
        title: "Mixed Matrix Blend Membranes of Poly(vinyl alcohol)-poly(vinyl pyrrolidone) Loaded with Phosphomolybdic Acid Used in Pervaporation Dehydration of Ethanol",
        year: 2010,
        doi: "",
      },
      {
        title: "Novel Thermoresponsive Semi-Interpenetrating Network Microspheres of Gellan Gum-Poly(N-isopropylacrylamide) for Controlled Release of Atenolol",
        year: 2010,
        doi: "",
      },
      {
        title: "Preyssler Type Heteropolyacid-incorporated Highly Water-selective Sodium Alginate-based Inorganic-organic Hybrid Membranes for Pervaporation Dehydration of Ethanol",
        year: 2010,
        doi: "https://doi.org/10.1016/j.cej.2010.02.040",
      },
      {
        title: "Controlled Release of Theophylline from Interpenetrating Blend Microspheres of Poly(vinyl alcohol) and Methyl Cellulose",
        year: 2010,
        doi: "",
      },
      {
        title: "Preparation and Evaluation of Novel Blend Microspheres of Poly(lactic-co-glycolic)acid and Pluronic F68/127 for Controlled Release of Repaglinide",
        year: 2010,
        doi: "",
      },
      {
        title: "Novel Methyl Cellulose-grafted Acrylamide/Gelatin Microspheres for Controlled Release of Nifedipine",
        year: 2010,
        doi: "",
      },
      {
        title: "Nanocomposite Membranes of Poly(vinyl alcohol) Loaded with Polyaniline-Coated TiO2 and TiO2 Nanoparticles for the Pervaporation Dehydration of Aqueous Mixtures of 1,4-Dioxane and Tetrahydrofuran",
        year: 2010,
        doi: "",
      },
      {
        title: "A Novel Method to Prepare 5-Fluorouracil, An Anti-cancer Drug, Loaded Microspheres from Poly(N-vinyl caprolactam-co-acrylamide) and Controlled Release Studies",
        year: 2010,
        doi: "",
      },
      {
        title: "Quinoline-Butylcyanoacrylate-based Nanoparticles for Brain Targeting for the Diagnosis of Alzheimer’s Disease",
        year: 2010,
        doi: "",
      },
      {
        title: "Copolymerization of N-Vinylpyrrolidone with Functionalized Vinyl Monomers: Synthesis, Characterization and Reactivity Relationships",
        year: 2009,
        doi: "",
      },
      {
        title: "Nanofiltration and Reverse Osmosis Thin Film Composite Membrane Module for the Removal of Dye and Salts from the Simulated Mixtures",
        year: 2009,
        doi: "",
      },
      {
        title: "Chitosan/Gelatin Blend Membranes for Pervaporation Dehydration of 1,4-Dioxane",
        year: 2009,
        doi: "",
      },
      {
        title: "Synthesis and Characterization of Novel Schiff Base Polyurethanes",
        year: 2009,
        doi: "",
      },
      {
        title: "Activated Charcoal Loaded Composite Membranes of Sodium Alginate in Pervaporation Separation of Water-Organic Azeotropes",
        year: 2009,
        doi: "",
      },
      {
        title: "Synthesis, Characterization and Evaluation of Novel Methoxypolyethyleneglycol-grafted Poly(esterurethane)s for Controlled Release of Repaglinide",
        year: 2009,
        doi: "",
      },
      {
        title: "Pervaporation-Aided Dehydration and Esterification of Acetic Acid with Ethanol Using 4A Zeolite Filled Crosslinked Sodium Alginate Mixed Matrix Membranes",
        year: 2009,
        doi: "",
      },
      {
        title: "Morphological Characterization of Electrospun Carbon Nanofiber Mats of Polyacrylonitrile Containing Heteropolyacids",
        year: 2009,
        doi: "",
      },
      {
        title: "Effect of added nickel nitrate on the physical, thermal and morphological characteristics of polyacrylonitrile-based carbon nanofibers",
        year: 2009,
        doi: "",
      },
      {
        title: "Hybrid composite membranes of sodium alginate for pervaporation dehydration of 1,4-dioxane and tetrahydrofuran",
        year: 2009,
        doi: "",
      },
      {
        title: "Preparation and Characterization of Novel Semi-interpenetrating Polymer Network Hydrogel Microspheres of Chitosan and Hydroxypropyl Cellulose for Controlled Release of Chlorothiazide",
        year: 2009,
        doi: "",
      },
      {
        title: "Free Standing Thin Webs of Porous Carbon Nanofibers of Polyacrylonitrile Containing Iron-oxide by Electrospinning",
        year: 2009,
        doi: "",
      },
      {
        title: "Synthesis, Characterization and Evaluation of n-Isopropylacrylamide and 2-Ethoxyethyl Methacrylate Based Copolymers for the Controlled Release of Felodipine",
        year: 2008,
        doi: "",
      },
      {
        title: "Synthesis and Characterization of Novel Polyurethanes Based on N'1, N'4-Bis[(4-hydroxyphenyl) methylene] succinohydrazide Hard Segment",
        year: 2008,
        doi: "",
      },
      {
        title: "N-Vinyl-2 Pyrrolidone and 4-Vinyl Benzylchloride Copolymers: Synthesis, Characterization and Reactivity Ratios",
        year: 2008,
        doi: "",
      },
      {
        title: "Pervaporation Separation of Toluene/Alcohol Mixtures Using Silicalite Zeolite Embedded Chitosan Mixed Matrix Membranes",
        year: 2008,
        doi: "",
      },
      {
        title: "Electrospun Nanocomposite Fiber Mats of Zinc-Oxide Loaded Polyacrylonitrile",
        year: 2008,
        doi: "",
      },
      {
        title: "Aluminum-rich Zeolite Beta Incorporated Sodium Alginate Mixed Matrix Membranes for Pervaporation Dehydration and Esterification of Ethanol and Acetic Acid",
        year: 2008,
        doi: "",
      },
      {
        title: "Molecular Dynamics Simulations on the Blends of Poly (vinyl pyrrolidone) and Poly (bisphenol-A-ether sulfone)",
        year: 2008,
        doi: "",
      },
      {
        title: "Microencapsulation of doxycycline into poly(lactide‐co‐glycolide) by spray drying technique: Effect of polymer molecular weight on process parameters",
        year: 2008,
        doi: "",
      },
      {
        title: "Developments in Polymeric Devices for Oral Insulin Delivery",
        year: 2008,
        doi: "",
      },
      {
        title: "Temperature Sensitive Semi-IPN Microspheres from Sodium Alginate and N-isopropylacrylamide for Controlled Release of 5-Fluorouracil",
        year: 2008,
        doi: "",
      },
      {
        title: "Prediction of Physical Properties of Nanofiltration Membranes Using Experiment and Theoretical Models",
        year: 2008,
        doi: "",
      },
      {
        title: "Sodium Alginate-Magnesium Aluminum Silicate Mixed Matrix Membranes for Pervaporation Separation of Water-Isopropanol Mixtures",
        year: 2008,
        doi: "",
      },



    // Add ALL publications from your file here...
  ];
  
  export default publicationsData;
  