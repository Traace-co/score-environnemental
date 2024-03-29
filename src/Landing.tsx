import { QuestionCircleOutlined } from "@ant-design/icons";
import { Divider, Radio, Select, Table, Tooltip } from "antd";
import { ReactNode, useRef, useState } from "react";
import { EnvironmentalScore } from "./EnvironmentalScore";
import { Introduction } from "./Introduction";
import { SampleCar, SampleCarCard } from "./SampleCarCard";
import { TotalFootprint } from "./TotalFootprint";
import { FootprintBreakdown } from "./charts/FootprintBreakdown";
import { allEnvironmentalScoreCountries } from "./methodology/environmentalScoreCountry";
import { FootprintEstimator } from "./methodology/footprintEstimator";
import { AluminiumRegion } from "./methodology/footprintItems/aluminiumFootprint";
import { BatteryChemistry, BatteryRegion, batteryChemistryName } from "./methodology/footprintItems/batteryFootprint";
import { FerrousMetalsCountry } from "./methodology/footprintItems/ferrousMetalsFootprint";
import { ManufacturingCountry } from "./methodology/footprintItems/manufacturingFootprint";
import { OtherMaterialsRegion } from "./methodology/footprintItems/otherMaterialsFootprint";
import { TransportationMode, TransportationRegion } from "./methodology/footprintItems/transportationFootprint";
import { Settings } from "./settings/Settings";
import { SettingsSlider } from "./settings/SettingsSlider";
import useIsMobile from "./utils/useIsMobile";

function Section(props: { title: string, children: ReactNode }) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium mb-4">
                {props.title}
            </h3>
            {props.children}
        </div>
    )
}

function ScoringSummaryItem(props: { title: string, children: ReactNode }) {
    return (
        <div className="flex flex-row items-center gap-2">
            <div className="flex-grow">
                {props.title}
            </div>
            {props.children}
        </div>
    )
}

interface CarProperties {
    totalMassAluminiumKg: number
    totalMassFerrousMetalsKg: number
    totalMassWithoutBatteryKg: number
    totalMassOtherThanFerrousMetalsOrAluminiumKg: number
    massWithoutDriverKg: number
    massBatteryKg: number
    batteryCapacityKWh: number
    chemistry: BatteryChemistry
    isLargeCar: boolean
}

export function Landing() {
    const simulatorRef = useRef<HTMLDivElement>(null)

    const isMobile = useIsMobile()

    const mediumSedan: CarProperties = {
        totalMassAluminiumKg: 130,
        totalMassFerrousMetalsKg: 780,
        totalMassWithoutBatteryKg: 1300,
        totalMassOtherThanFerrousMetalsOrAluminiumKg: 80,
        massWithoutDriverKg: 1650,
        batteryCapacityKWh: 55,
        massBatteryKg: 550,
        chemistry: BatteryChemistry.LFP_Graphite,
        isLargeCar: true,
    }

    const mediumSUV: CarProperties = {
        totalMassAluminiumKg: 150,
        totalMassFerrousMetalsKg: 800,
        totalMassWithoutBatteryKg: 1500,
        totalMassOtherThanFerrousMetalsOrAluminiumKg: 100,
        massWithoutDriverKg: 1900,
        batteryCapacityKWh: 70,
        massBatteryKg: 700,
        chemistry: BatteryChemistry.NMC811_Graphite,
        isLargeCar: true,
    }

    const smallCar: CarProperties = {
        totalMassAluminiumKg: 100,
        totalMassFerrousMetalsKg: 500,
        totalMassWithoutBatteryKg: 1200,
        totalMassOtherThanFerrousMetalsOrAluminiumKg: 60,
        massWithoutDriverKg: 1200,
        batteryCapacityKWh: 30,
        massBatteryKg: 300,
        chemistry: BatteryChemistry.LFP_Graphite,
        isLargeCar: false,
    }

    const transportationFromChinaToFrance = [
        {
            mode: TransportationMode.Sea,
            distanceKm: 20000,
            region: TransportationRegion.Asia
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.Asia
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.France
        }
    ]

    const transportationFromSouthKoreaToFrance = [
        {
            mode: TransportationMode.Sea,
            distanceKm: 23000,
            region: TransportationRegion.Asia
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.Asia
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.France
        }
    ]

    const transportationFromGermanyToFrance = [
        {
            mode: TransportationMode.Train,
            distanceKm: 1500,
            region: TransportationRegion.Europe_Without_France
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.Europe_Without_France
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 500,
            region: TransportationRegion.France
        }
    ]

    const transportationFromFranceToFrance = [
        {
            mode: TransportationMode.Train,
            distanceKm: 500,
            region: TransportationRegion.France
        },
        {
            mode: TransportationMode.Road,
            distanceKm: 200,
            region: TransportationRegion.France
        }
    ]

    const china = allEnvironmentalScoreCountries.find(country => country.id === 'cn')!
    const france = allEnvironmentalScoreCountries.find(country => country.id === 'fr')!
    const germany = allEnvironmentalScoreCountries.find(country => country.id === 'de')!
    const southKorea = allEnvironmentalScoreCountries.find(country => country.id === 'kr')!

    const sampleCars: SampleCar[] = [
        {
            name: 'SUV intégralement produit en Chine',
            emoji: china.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromChinaToFrance,
                ...china,
                ...mediumSUV
            })
        },
        {
            name: 'SUV intégralement produit en Corée du Sud',
            emoji: southKorea.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromSouthKoreaToFrance,
                ...southKorea,
                ...mediumSUV
            })
        },
        {
            name: 'SUV intégralement produit en Allemagne',
            emoji: germany.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromGermanyToFrance,
                ...germany,
                ...mediumSUV
            })
        },
        {
            name: 'SUV intégralement produit en France',
            emoji: france.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromFranceToFrance,
                ...france,
                ...mediumSUV
            })
        },
        {
            name: 'Berline moyenne intégralement produite en Chine',
            emoji: china.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromChinaToFrance,
                ...china,
                ...mediumSedan
            })
        },
        {
            name: 'Berline moyenne intégralement produite en France',
            emoji: france.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromFranceToFrance,
                ...france,
                ...mediumSedan
            })
        },
        {
            name: 'Citadine intégralement produite en Chine',
            emoji: china.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromChinaToFrance,
                ...china,
                ...smallCar
            })
        },
        {
            name: 'Citadine intégralement produite en Allemagne',
            emoji: germany.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromGermanyToFrance,
                ...germany,
                ...smallCar
            })
        },
        {
            name: 'Citadine intégralement produite en France',
            emoji: france.emoji,
            footprintEstimator: new FootprintEstimator({
                transportationSettings: transportationFromFranceToFrance,
                ...france,
                ...smallCar
            })
        }
    ]

    const defaultSampleCar = sampleCars[0]

    const [selectedCarName, setSelectedCarName] = useState<string | undefined>(defaultSampleCar.name)
    const [totalMassAluminiumKg, setTotalMassAluminiumKg] = useState(defaultSampleCar.footprintEstimator.totalMassAluminiumKg)
    const [aluminiumRegion, setAluminiumRegion] = useState(defaultSampleCar.footprintEstimator.aluminiumRegion)
    const [totalMassFerrousMetalsKg, setTotalMassFerrousMetalsKg] = useState(defaultSampleCar.footprintEstimator.totalMassFerrousMetalsKg)
    const [massBatteryKg, setMassBatteryKg] = useState(defaultSampleCar.footprintEstimator.massBatteryKg)
    const [ferrousMetalsCountry, setFerrousMetalsCountry] = useState(defaultSampleCar.footprintEstimator.ferrousMetalsCountry)
    const [totalMassOtherThanFerrousMetalsOrAluminiumKg, setTotalMassOtherThanFerrousMetalsOrAluminiumKg] = useState(defaultSampleCar.footprintEstimator.totalMassOtherThanFerrousMetalsOrAluminiumKg)
    const [otherMaterialsRegion, setOtherMaterialsRegion] = useState(defaultSampleCar.footprintEstimator.otherMaterialsRegion)
    const [manufacturingCountry, setManufacturingCountry] = useState(defaultSampleCar.footprintEstimator.manufacturingCountry)
    const [batteryCapacityKWh, setBatteryCapacityKWh] = useState(defaultSampleCar.footprintEstimator.batteryCapacityKWh)
    const [batteryRegion, setBatteryRegion] = useState(defaultSampleCar.footprintEstimator.batteryRegion)
    const [chemistry, setChemistry] = useState(defaultSampleCar.footprintEstimator.chemistry)
    const [isLargeCar, setIsLargeCar] = useState(defaultSampleCar.footprintEstimator.isLargeCar)
    const [transportationSettings, setTransportationSettings] = useState(defaultSampleCar.footprintEstimator.transportationSettings)

    const totalMassWithoutBatteryKg = totalMassAluminiumKg + totalMassFerrousMetalsKg + totalMassOtherThanFerrousMetalsOrAluminiumKg
    const massWithoutDriverKg = totalMassWithoutBatteryKg + massBatteryKg

    const footprintEstimator = new FootprintEstimator({
        totalMassAluminiumKg,
        aluminiumRegion,
        totalMassFerrousMetalsKg,
        massBatteryKg,
        ferrousMetalsCountry,
        totalMassWithoutBatteryKg,
        totalMassOtherThanFerrousMetalsOrAluminiumKg,
        massWithoutDriverKg,
        manufacturingCountry,
        batteryCapacityKWh,
        batteryRegion,
        chemistry,
        otherMaterialsRegion,
        transportationSettings,
        isLargeCar
    })

    function replaceSimulationWithSampleCar(car: SampleCar) {
        setTotalMassAluminiumKg(car.footprintEstimator.totalMassAluminiumKg)
        setAluminiumRegion(car.footprintEstimator.aluminiumRegion)
        setTotalMassFerrousMetalsKg(car.footprintEstimator.totalMassFerrousMetalsKg)
        setFerrousMetalsCountry(car.footprintEstimator.ferrousMetalsCountry)
        setTotalMassOtherThanFerrousMetalsOrAluminiumKg(car.footprintEstimator.totalMassOtherThanFerrousMetalsOrAluminiumKg)
        setManufacturingCountry(car.footprintEstimator.manufacturingCountry)
        setBatteryCapacityKWh(car.footprintEstimator.batteryCapacityKWh)
        setBatteryRegion(car.footprintEstimator.batteryRegion)
        setChemistry(car.footprintEstimator.chemistry)
        setOtherMaterialsRegion(car.footprintEstimator.otherMaterialsRegion)
        setIsLargeCar(car.footprintEstimator.isLargeCar)
        setSelectedCarName(car.name)
        setTransportationSettings(car.footprintEstimator.transportationSettings)

        // Scroll to simulator
        simulatorRef.current?.scrollIntoView(({ behavior: 'smooth', block: 'start' }))
    }

    return (
        <div className="flex flex-col gap-8">
            <Introduction />
            <Divider />
            <Section title="Exemples de véhicules">
                <div className="flex flex-col gap-4">
                    {sampleCars.map(sampleCar => (
                        <SampleCarCard
                            key={sampleCar.name}
                            car={sampleCar}
                            maxTotalFootprint={Math.max(...sampleCars.map(car => car.footprintEstimator.getTotalFootprint()))}
                            onCarSelected={car => replaceSimulationWithSampleCar(car)} />
                    ))
                    }
                </div>
            </Section>
            <Divider />
            <Section title={selectedCarName ? `Simulateur (${selectedCarName})` : "Simulateur"}>
                <div className="flex flex-wrap gap-16" ref={simulatorRef}>
                    <div className="flex flex-col">
                        <div>
                            <ScoringSummaryItem title="Score environnemental :" >
                                <EnvironmentalScore footprintEstimator={footprintEstimator} />
                            </ScoringSummaryItem>
                            <ScoringSummaryItem title="Empreinte carbone :" >
                                <TotalFootprint footprintEstimator={footprintEstimator} />
                            </ScoringSummaryItem>
                            <ScoringSummaryItem title="Éligibilité au bonus écologique :">
                                <div>
                                    {footprintEstimator.isEligibleForBonus()
                                        ? (
                                            <span>✅</span>
                                        )
                                        : (
                                            <span>❌</span>
                                        )}
                                </div>
                            </ScoringSummaryItem>
                        </div>
                        <div className="w-full sm:w-96">
                            <FootprintBreakdown
                                footprintEstimator={footprintEstimator}
                            />
                        </div>
                    </div>

                    <div className="flex-grow gap-8 flex flex-col">
                        <SettingsSection title="Paramétrage du score">
                            <Settings label={("Type de véhicule"
                            )}>
                                <div className="flex flex-row gap-2 items-center">
                                    <Radio.Group value={isLargeCar}>
                                        <Radio.Button value={false} onClick={() => setIsLargeCar(false)}>Citadine</Radio.Button>
                                        <Radio.Button value={true} onClick={() => setIsLargeCar(true)}>Véhicule multi-usages</Radio.Button>
                                    </Radio.Group>
                                    <Tooltip
                                        title="Définition d'un véhicule multi-usages : nombre de places assises supérieur ou égal à cinq, volume de coffre supérieur à deux cents litres et autonomie électrique supérieure ou égale à cent soixante-dix kilomètres">
                                        <QuestionCircleOutlined />
                                    </Tooltip>
                                </div>
                            </Settings>
                        </SettingsSection>
                        <SettingsSection title="Métaux et autres matériaux">
                            <Settings label="Masse totale d'aluminium">
                                <SettingsSlider
                                    min={0}
                                    max={2000}
                                    precision={3}
                                    value={totalMassAluminiumKg}
                                    onChange={setTotalMassAluminiumKg}
                                    addonAfter="kg"
                                    extra={<Select
                                        dropdownMatchSelectWidth={false}
                                        className="w-full"
                                        value={aluminiumRegion}
                                        onChange={setAluminiumRegion}
                                        options={Object.values(AluminiumRegion).map(region => (
                                            { value: region, label: region }
                                        ))} />}

                                />
                            </Settings>
                            <Settings label="Masse totale de métaux ferreux">
                                <SettingsSlider
                                    min={0}
                                    max={2000}
                                    precision={3}
                                    value={totalMassFerrousMetalsKg}
                                    onChange={setTotalMassFerrousMetalsKg}
                                    addonAfter="kg"
                                    extra={<Select
                                        dropdownMatchSelectWidth={false}
                                        className="w-full"
                                        value={ferrousMetalsCountry}
                                        onChange={setFerrousMetalsCountry}
                                        options={Object.values(FerrousMetalsCountry).map(region => (
                                            { value: region, label: region }
                                        ))} />}
                                />
                            </Settings>
                            <Settings label="Masse totale des autres matériaux">
                                <SettingsSlider
                                    min={0}
                                    max={2000}
                                    precision={3}
                                    value={totalMassOtherThanFerrousMetalsOrAluminiumKg}
                                    onChange={setTotalMassOtherThanFerrousMetalsOrAluminiumKg}
                                    addonAfter="kg"
                                    extra={<Select
                                        dropdownMatchSelectWidth={false}
                                        className="w-full"
                                        value={otherMaterialsRegion}
                                        onChange={setOtherMaterialsRegion}
                                        options={[
                                            OtherMaterialsRegion.Europe,
                                            OtherMaterialsRegion.Others
                                        ].map(region => (
                                            { value: region, label: region }
                                        ))} />}
                                />
                            </Settings>
                        </SettingsSection>
                        <SettingsSection title="Transformations intermédiaires et assemblage">
                            <Settings label="Région">
                                <Select
                                    dropdownMatchSelectWidth={false}
                                    showSearch
                                    className="w-full"
                                    value={manufacturingCountry}
                                    onChange={setManufacturingCountry}
                                    options={Object.values(ManufacturingCountry).map(region => (
                                        { value: region, label: region }
                                    ))} />
                            </Settings>
                            <Settings label="Masse totale véhicule sans batterie">
                                <div className="text-lg text-gray-500">
                                    {`${totalMassWithoutBatteryKg.toLocaleString()} kg`}
                                </div>
                            </Settings>
                        </SettingsSection>
                        <SettingsSection title="Batterie">
                            <Settings label="Capacité">
                                <SettingsSlider
                                    className="flex-grow"
                                    min={0}
                                    max={120}
                                    precision={3}
                                    value={batteryCapacityKWh}
                                    onChange={setBatteryCapacityKWh}
                                    addonAfter="kWh"
                                    extra={<Select
                                        className="w-full"
                                        value={batteryRegion}
                                        onChange={setBatteryRegion}
                                        options={[
                                            BatteryRegion.China,
                                            BatteryRegion.Europe,
                                            BatteryRegion.Japan,
                                            BatteryRegion.SouthKorea,
                                            BatteryRegion.USA,
                                            BatteryRegion.Other
                                        ].map(region => (
                                            { value: region, label: region }
                                        ))} />}
                                />
                            </Settings>
                            <Settings label="Chimie">
                                <Select
                                    className="w-full"
                                    value={chemistry}
                                    options={[
                                        BatteryChemistry.LFP_Graphite,
                                        BatteryChemistry.NCA_Graphite,
                                        BatteryChemistry.NMC111_Graphite,
                                        BatteryChemistry.NMC532_Graphite,
                                        BatteryChemistry.NMC622_Graphite,
                                        BatteryChemistry.NMC811_Graphite,
                                        BatteryChemistry.Other_Chemistry
                                    ].map(chemistry => (
                                        { value: chemistry, label: batteryChemistryName(chemistry) }
                                    ))}
                                    onChange={setChemistry} />
                            </Settings>
                            <Settings label="Masse batterie">
                                <SettingsSlider
                                    min={0}
                                    max={1000}
                                    precision={3}
                                    value={massBatteryKg}
                                    onChange={setMassBatteryKg}
                                    addonAfter="kg"
                                />
                            </Settings>
                        </SettingsSection>
                        <SettingsSection title="Transport (non éditable)">
                            <Settings label="Masse hors conducteur">
                                <div className="text-lg text-gray-500">
                                    {`${massWithoutDriverKg.toLocaleString()} kg`}
                                </div>
                            </Settings>
                            <div className="flex flex-col w-full">
                                <Table
                                    showHeader={!isMobile}
                                    pagination={false}
                                    dataSource={transportationSettings.map((transportation, index) => (
                                        {
                                            key: index,
                                            mode: transportation.mode,
                                            region: transportation.region,
                                            distanceKm: `${transportation.distanceKm.toLocaleString()} km`
                                        }))
                                    }
                                    columns={[
                                        {
                                            title: 'Mode de transport',
                                            dataIndex: 'mode',
                                            key: 'mode',
                                        },
                                        {
                                            title: 'Region',
                                            dataIndex: 'region',
                                            key: 'region',
                                        },
                                        {
                                            title: 'Distance',
                                            dataIndex: 'distanceKm',
                                            key: 'distanceKm',
                                        },
                                    ]}
                                />
                            </div>
                        </SettingsSection>
                    </div>
                </div >
            </Section >
        </div >
    )
}

function SettingsSection(props: { title: string, children: ReactNode }) {
    return (
        <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium mb-4">
                {props.title}
            </h3>
            {props.children}
        </div>
    )
}