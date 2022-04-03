import React, { useState } from 'react'
import './home.scss'


export default function Home() {



    const [estado, setEstado] = useState()
    const [estado2] = useState()
    const [estado3] = useState()
    const [estado4] = useState()
    const [estado5] = useState()
    const [estado6] = useState()
    const [estado7] = useState()
    const [estado8] = useState()
    const [estado9] = useState()
    const [estado10] = useState()
    const [estado11] = useState()
    const [estado12] = useState()


        return (
            <div className='home'>

                <div className="box">
                    {/* inicio box (caixa de perguntas + forms) */}
                    <div className="card">
                        <div className="left">

                            <div className="form-ask">
                                <h2>Quão confortável você está com seus recursos financeiros?</h2>
                            </div>

                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" id="p2" value={estado} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>

                                </div>

                            </label>

                        </div>

                        <div className="right">
                            <div className="form-ask">
                                <h2>Você tem se dedicado a cuidar de suas finanças?</h2>
                            </div>
                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado2} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>

                    </div>

                    <div className="card">
                        <div className="left">
                            <div className="form-ask">
                                <h2>Você está indo na direção certa?</h2>
                            </div>

                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado3} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                        <div className="right">
                            <div className="form-ask">
                                <h2>O que faz profissionalmente está alinhado com seus valores pessoais?</h2>
                            </div>
                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado4} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="card">
                        <div className="left">
                            <div className="form-ask">
                                <h2>Você se dedica a melhorar e aprender coisas novas?</h2>
                            </div>

                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado5} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                        <div className="right">
                            <div className="form-ask">
                                <h2>Você está se desenvolvendo intelectualmente?</h2>
                            </div>
                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado6} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                    </div>

                    <div className="card">
                        <div className="left">
                            <div className="form-ask">
                                <h2>Quão saudável fisicamente é você?</h2>
                            </div>

                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado7} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                        <div className="right">
                            <div className="form-ask">
                                <h2>Você está satisfeito com o seu nível de disposição?</h2>
                            </div>
                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado8} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                    </div>

                    <div className="card">
                        <div className="left">
                            <div className="form-ask">
                                <h2>Quão focado você está no crescimento pessoal?</h2>
                            </div>

                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado9} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                        <div className="right">
                            <div className="form-ask">
                                <h2>Você está tentando novas experiências e buscando aprender?</h2>
                            </div>
                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado10} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                    </div>

                    <div className="card">
                        <div className="left">
                            <div className="form-ask">
                                <h2>Quão conectado você está com a sua história?</h2>
                            </div>

                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado11} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                        <div className="right">
                            <div className="form-ask">
                                <h2>Você está satisfeito com o seu relacionamento com o seu passado?</h2>
                            </div>
                            <label htmlFor="" className='labelform'>
                                <div className="container p-5">
                                    <select className="custom-select" value={estado12} onChange={e=>setEstado(e.target.value)}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                            </label>
                        </div>
                    </div>
                    <div className="result">
                        <div className="divs">
                            <button className='btn btn-danger'> Limpar Respostas</button>
                        </div>
                        <div className="divs">
                            <button className='btn btn-success'> Gerar Gráfico</button>
                        </div>
                        <div className="divs">
                            <button className='btn btn-success'>Intruções de Uso</button>
                        </div>
                    </div>
                    {/* inicio box (caixa de perguntas + forms) */}
                </div>

            </div>
        )
}
