import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import { Instruments } from '../Modules/instruments';
import { Utils } from '../Modules/utils';
import imgBongos from '../Images/bongos_1.jpg';
import imgDarbuka from '../Images/darbuka_1.jpg';
import imgGuitar from '../Images/guitar_1.jpg';
import imgDrums from '../Images/drums_1.jpg';
import imgKalimba from '../Images/kalimba_1.jpg';
import imgMelodica from '../Images/melodica_1.jpg';
import imgPiano from '../Images/piano_1.jpg';
import imgRecorder from '../Images/recorder_2_text.jpg';
import imgTinWhistle from '../Images/tin_whistle_2.jpg';
import imgTongueDrum from '../Images/tongue_drum_1.jpg';
import imgVoice from '../Images/voice_1.jpg';
import imgDrumSticks from '../Images/drum_sticks.jpg';
import imgMaintenanceRecorder from '../Images/maintenance_of_a_recorder.jpg';
import imgAltoRecorderVsSopranoRecorder from '../Images/alto_recorder_vs_soprano_recorder.jpg';
import imgTinWhistleFingeringChart from '../Images/tin_whistle_fingering_chart.jpg';
import sndDoum from '../Sounds/doum.wav';
import sndKa from '../Sounds/ka.wav';
import sndTek from '../Sounds/tek.wav';
import sndBassDrum from '../Sounds/bass_drum.wav';
import sndSnareDrum from '../Sounds/snare_drum.wav';
import sndTomDrum from '../Sounds/mid_tom.wav';
import sndHiHat from '../Sounds/closed_hi-hat.wav';
import sndCrashCymbal from '../Sounds/crash_cymbal.wav';
import sndRideCymbal from '../Sounds/ride_cymbal.wav';
import sndTongDrum from '../Sounds/tongue_drum.wav';
import './assets/css/style.css';

function InstrumentPage() {
    const instruments = new Instruments();
    const instrumentName = Utils.underscoresToSpaces(useParams().name);
    const info = instruments.getInfo(instrumentName);
    const linkCategories = instruments.getLinkCategories(info.links);
    const [selectedCategory, setSelectedCategory] = useState('general');
    const articles = instruments.getArticles(info);
    const [selectedArticle, setSelectedArticle] = useState(null);

    function selectCategory(category) {
        setSelectedCategory(category === selectedCategory ? null : category);
    }

    function selectArticle(article) {
        setSelectedArticle(article === selectedArticle ? null : article);
    }

    function getImage(instrument) {
        let result = null;
        const instrumentNameLower = instrument.toLowerCase();
        switch (instrumentNameLower) {
            case 'bongos':
                result = imgBongos;
                break;
            case 'darbuka':
                result = imgDarbuka;
                break;
            case 'drums':
                result = imgDrums;
                break;
            case 'guitar':
                result = imgGuitar;
                break;
            case 'kalimba':
                result = imgKalimba;
                break;
            case 'melodica':
                result = imgMelodica;
                break;
            case 'piano':
                result = imgPiano;
                break;
            case 'recorder':
                result = imgRecorder;
                break;
            case 'tin whistle':
                result = imgTinWhistle;
                break;
            case 'tongue drum':
                result = imgTongueDrum;
                break;
            case 'voice':
                result = imgVoice;
                break;
            case 'a:drum_sticks':
                result = imgDrumSticks;
                break;
            case 'a:maintenance_of_a_recorder':
                result = imgMaintenanceRecorder;
                break;
            case 'a:alto_recorder_vs_soprano_recorder':
                result = imgAltoRecorderVsSopranoRecorder;
                break;
            case 'a:tin_whistle_fingering_chart':
                result = imgTinWhistleFingeringChart;
                break;
            default:
                result = null;
                break;
        }
        return result;
    }

    function getSound(snd) {
        let result = null;
        const sndLower = snd.toLowerCase();
        switch (sndLower) {
            case 'doum':
                result = sndDoum;
                break;
            case 'ka':
                result = sndKa;
                break;
            case 'tek':
                result = sndTek;
                break;
            case 'bass drum':
                result = sndBassDrum;
                break;
            case 'snare drum':
                result = sndSnareDrum;
                break;
            case 'toms':
                result = sndTomDrum;
                break;
            case 'hi-hat':
                result = sndHiHat;
                break;
            case 'crash cymbal':
                result = sndCrashCymbal;
                break;
            case 'ride cymbal':
                result = sndRideCymbal;
                break;
            case 'bell-like sound':
                result = sndTongDrum;
                break;
            default:
                result = null;
                break;
        }
        return result;
    }

    function descriptionClicked(e) {
        const p = Utils.getCaretPosition(e.target);
        const word = Utils.getWordBetweenBrackets(info.generalInfo, p);
        if (word !== '') {
            const snd = getSound(word);
            if (snd !== null) {
                const audio = new Audio(snd);
                audio.play();
            }
        }
    }

    return (
        <div className="bg-dark text-light">
            <header className="d-flex justify-content-start">
                <Logo />
                <div>
                    <NavBar />
                    <h1 className="mt-5">{Utils.capitalize(instrumentName)}</h1>
                </div>
            </header>
            <main className="container  mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8 rounded-4 shadow-lg p-4">
                        <img
                            src={getImage(instrumentName)}
                            alt={instrumentName}
                            className="img-fluid mb-4 rounded-4"
                        />
                        <h3>Description</h3>
                        <p className="fs-5" onClick={descriptionClicked}>
                            {info.generalInfo}
                        </p>
                        <div>
                            {articles.length > 0 && ( // Check if articles exist
                                <>
                                    <h3 className="mt-5 mb-0">Articles</h3>
                                    <p className="text-secondary fs-6 ">
                                        (please choose the article below)
                                    </p>
                                    {articles.map((article, index) => (
                                        <div key={index}>
                                            <h3
                                                className="mb-0 mt-3 text-decoration-none navlink fw-bold fs-4"
                                                onClick={() =>
                                                    selectArticle(article)
                                                }
                                            >
                                                {Utils.underscoresToSpaces(
                                                    Utils.capitalize(article)
                                                )}
                                            </h3>

                                            {selectedArticle === article &&
                                                getImage('a:' + article) !==
                                                    null && (
                                                    <img
                                                        src={getImage(
                                                            'a:' + article
                                                        )}
                                                        alt={article}
                                                        className="img-fluid mt-4 mb-1 rounded-4"
                                                    />
                                                )}
                                            {selectedArticle === article && (
                                                <p className="mt-3 fs-5">
                                                    {info.articles[article]}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </>
                            )}
                            <h3 className="mb-0 mt-3">Resources</h3>
                            <p className="text-secondary fs-6">
                                (please choose the category below)
                            </p>
                            {linkCategories.map((category, index) => (
                                <div key={index}>
                                    <div
                                        className="text-decoration-none navlink fw-bold fs-4"
                                        onClick={() => selectCategory(category)}
                                    >
                                        {Utils.underscoresToSpaces(
                                            Utils.capitalize(category)
                                        )}
                                    </div>
                                    {selectedCategory === category && (
                                        <ul className="list-unstyled ml-0 p-0 text-white">
                                            {info.links[category].map(
                                                (linkWithDesc, linkIndex) => {
                                                    const link =
                                                        Utils.getStringFromList(
                                                            linkWithDesc,
                                                            0
                                                        );
                                                    const description =
                                                        Utils.getStringFromList(
                                                            linkWithDesc,
                                                            1
                                                        );
                                                    return (
                                                        <li
                                                            className="pt-1 pb-1 d-flex align-items-center justify-content-start column-gap-3 flex-wrap"
                                                            key={linkIndex}
                                                        >
                                                            <a
                                                                className="text-decoration-none fs-5"
                                                                href={link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {link}
                                                            </a>
                                                            <div className="text-white fs-5">
                                                                {description.trim()}
                                                            </div>
                                                        </li>
                                                    );
                                                }
                                            )}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default InstrumentPage;
