import React from 'react';
import './estilos.css';


function FormularioProp(
    {
        tipoOperacion,
        tipoProps,
        handleOnSubmit,
        handleOnChangeData,
        handleOnChangeOpVenta,
        handleOnChangeMonedaVenta,
        handleOnChangePrecioVenta,
        handleOnChangeOpAlquiler,
        handleOnChangeMonedaAlq,
        handleOnChangePrecioAlq,
        handleOnChangeUbicacion,
        handleOnChangeServicios,
        handleOnChangeImgs,
        handleOnChangeVideos,
        handleOnClickEliminaImg,
        data,
        vista1,
        vista2,
        vista3,
        vista4,
        onClickSgtVista1,
        onClickAtrasVista2,
        onClickSgtVista2,
        onClickAtrasVista3,
        onClickSgtVista3,
        onClickAtrasVista4,
        validaDatosVista1,
        validaDatosVista2,
        validaDatosVista3,
        validaDatosVista4,
        ubicacion,
        monedaVenta,
        precioVenta,
        opVenta,
        monedaAlq,
        precioAlq,
        opAlquiler,
        vistaPrevia,
        vistaPreviaVideo
    }
) {

    


    return (
        <div className='cont-crea-prop'>
            {
                tipoOperacion === 'creacion' ? <h1>Crea tu propiedad</h1> : <h1>Edita tu propiedad</h1>
            }
            <form onSubmit={handleOnSubmit} className='formulario-crea-prop'>
                {/* vista-1 */}
                <div className={vista1 ? 'vista-1' : 'notVista1'} id='vista-1'>
                    <div className='cont-data-vista-1'>
                        {/* titulo prop */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Titulo publicación</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <input type='text' id='tituloPublicacion' value={data.tituloPublicacion} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                        </div>
                        {/* tipo prop */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Tipo propiedad</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <select id='tipoPropiedad' onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion'>
                                <option value=''>Seleccione una opción</option>
                                {
                                    tipoProps.map((tipo, index) => (
                                        <option key={index} value={tipo}>{tipo}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* operacion */}
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Tipo operación</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <div className='cont-operaciones'>
                                {/* venta */}
                                <div className='cont-opVenta-y-precio'>
                                    <div className='cont-venta'>
                                        <label className='label-venta'>Venta</label>
                                        <input
                                            type='checkbox'
                                            id='venta'
                                            value={"Venta"}
                                            onChange={(e) => { handleOnChangeOpVenta(e) }}
                                            className='input-check-venta'
                                        />
                                    </div>
                                    <div className='cont-precio-venta'>
                                        <label className='label-precio-venta'>P. Venta: </label>
                                        <input 
                                            type='text' 
                                            id='monedaVenta' 
                                            value={monedaVenta} 
                                            onChange={(e) => { handleOnChangeMonedaVenta(e) }} 
                                            className='input-moneda-venta' 
                                            disabled={!opVenta}
                                        />
                                        <input 
                                            type='number' 
                                            id='precioVenta' 
                                            value={precioVenta} 
                                            onChange={(e) => { handleOnChangePrecioVenta(e) }} 
                                            className='input-precio-venta' 
                                            disabled={!opVenta}
                                        />
                                    </div>                                    
                                </div>
                                {/* Alq */}
                                <div className='cont-opAlq-y-precio'>
                                    <div className='cont-alquiler'>
                                        <label className='label-alq'>Alquiler</label>
                                        <input 
                                            type='checkbox' 
                                            id='alquiler' 
                                            value={"Alquiler"} 
                                            onChange={(e) => { handleOnChangeOpAlquiler(e) }} 
                                            className='input-check-venta' 
                                        />
                                    </div>                                    
                                    <div className='cont-precio-alq'>
                                        <label className='label-precio-venta'>P. Alquiler: </label>
                                        <input 
                                            type='text' 
                                            id='monedaAlq' 
                                            value={monedaAlq} 
                                            onChange={(e) => { handleOnChangeMonedaAlq(e) }} 
                                            className='input-moneda-alq' 
                                            disabled={!opVenta}
                                        />
                                        <input 
                                            type='number' 
                                            id='precioAlq' 
                                            value={precioAlq} 
                                            onChange={(e) => { handleOnChangePrecioAlq(e) }} 
                                            className='input-precio-venta'
                                            disabled={!opAlquiler}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='cont-dato'>
                            <div style={{'display':'flex', 'justifyContent':'center', 'alignItems':'center'}}>
                                <label className='label-crea-prop'>Descripción</label>
                                <p style={{ 'margin':'0', 'color':'red', 'fontSize':'23px'}}>*</p>
                            </div>
                            <textarea id='descripcion' value={data.descripcion} onChange={(e) => { handleOnChangeData(e) }}  rows="8" className='input-descripcion-prop' />
                        </div>
                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>                            
                                <div className='cont-campo-requerido'>
                                    <p>Campo requerido</p>
                                    <p style={{'color':'red', 'marginLeft':'3px'}}>*</p>
                                </div>
                                <div className='cont-botones-sgt-atras'>
                                    <button
                                        type='button' //sino se recarga la pag pensando q es el submit
                                        className='btn-sgt-vista1'
                                        onClick={() => onClickSgtVista1()}
                                        disabled={!validaDatosVista1()} // deshabilitado si no se completan todos los campos
                                    >
                                        Siguiente
                                    </button>
                                </div>                            
                        </div>                
                    </div>
                </div>
                {/* vista-2 */}
                <div className={vista2 ? 'vista-2' : 'notVista2'} id='vista-2'>
                    <div className='cont-data-vista-2'>
                        {/* direccPubli y direccReal */}
                        <div className='cont-ubicacion'>
                            <div className='cont-ubicacion-direcc'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dirección Publicación</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='direccionPublicacion' 
                                    value={ubicacion.direccionPublicacion} 
                                    onChange={(e) => { handleOnChangeUbicacion(e) }}
                                    placeholder='Lavalle al 2500'
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                            <div className='cont-ubicacion-barrio'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dirección Real</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='direccionReal' 
                                    value={ubicacion.direccionReal} 
                                    onChange={(e) => { handleOnChangeUbicacion(e) }}
                                    placeholder='Lavalle al 2570'
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                        </div>                        
                        {/* barrio y ciudad */}
                        <div className='cont-ubicacion'>
                            <div className='cont-ubicacion-direcc'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Barrio</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='barrio' 
                                    value={ubicacion.barrio} 
                                    onChange={(e) => { handleOnChangeUbicacion(e) }}
                                    placeholder='Centro'
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                            <div className='cont-ubicacion-barrio'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Ciudad</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='text' 
                                    id='ciudad' 
                                    value={ubicacion.ciudad} 
                                    onChange={(e) => { handleOnChangeUbicacion(e) }} 
                                    placeholder='Mar del Plata'
                                    className='input-tituloPublicacion' 
                                />
                            </div>
                        </div>
                        {/* provincia */}
                        <div className='cont-ubicacion'>
                            <label className='label-crea-prop'>Provincia</label>
                            <input
                                type='text'
                                id='provincia'
                                value={ubicacion.provincia}
                                onChange={(e) => { handleOnChangeUbicacion(e) }}
                                placeholder='Buenos Aires'
                                className='input-tituloPublicacion'
                            />
                        </div>
                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div>
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button 
                                    type='button' 
                                    className='btn-atras-vista-2' 
                                    onClick={()=>onClickAtrasVista2()}
                                >
                                    Atrás
                                </button>
                                <button 
                                    type='button' 
                                    className='btn-sgt-vista-2' 
                                    onClick={()=>onClickSgtVista2()}
                                    disabled={!validaDatosVista2()}
                                >
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* vista-3 */}
                <div className={vista3 ? 'vista-3' : 'notVista3'} id='vista-3'>
                    <div className='cont-data-vista-3'>
                        {/* amb, dorm, baño,  */}
                        <div className='cont-ambts'>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Ambientes</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='ambientes' 
                                    value={data.ambientes} 
                                    onChange={(e) => { handleOnChangeData(e) }} 
                                    className='input-amb' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Dormitorios</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='dormitorios' 
                                    value={data.dormitorios} 
                                    onChange={(e) => { handleOnChangeData(e) }} 
                                    className='input-amb' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Baños</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input 
                                    type='number' 
                                    id='baños' 
                                    value={data.baños} 
                                    onChange={(e) => { handleOnChangeData(e) }} 
                                    className='input-amb' 
                                />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Cant. pisos</label>
                                <input 
                                    type='number' 
                                    id='cantPisos' 
                                    value={data.cantPisos} 
                                    onChange={(e) => { handleOnChangeData(e) }} 
                                    className='input-amb' 
                                />
                            </div>
                        </div>
                        {/* superficies*/}
                        <div className='cont-ambts'>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup cubierta</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='number' id='supCubierta' value={data.supCubierta} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup semicub</label>
                                </div>
                                <input type='number' id='supSemiCub' value={data.supSemiCub} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup decubierta</label>
                                </div>
                                <input type='number' id='supDescubierta' value={data.supDescubierta} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Sup Total</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='number' id='supTotal' value={data.supTotal} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                        </div>
                        {/* estado, antiguedad, cant cocheras */}
                        <div className='cont-ambts'>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Estado</label>
                                <input type='text' id='estado' value={data.estado} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Antiguedad</label>
                                <input type='number' id='antiguedad' value={data.antiguedad} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                            <div className='cont-amb'>
                                <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                    <label className='label-crea-prop'>Cant cocheras</label>
                                    <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                                </div>
                                <input type='number' id='cantCocheras' value={data.cantCocheras} onChange={(e) => { handleOnChangeData(e) }} className='input-tituloPublicacion' />
                            </div>
                        </div>
                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div>
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button 
                                    type='button' 
                                    className='btn-atras-vista-2' 
                                    onClick={()=>onClickAtrasVista3()}>Atrás</button>
                                <button 
                                    type='button' 
                                    className='btn-sgt-vista-2' 
                                    onClick={()=>onClickSgtVista3()}
                                    disabled={!validaDatosVista3()}
                                >
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* vista-4*/}
                <div className={vista4 ? 'vista-4' : 'notVista4'} id='vista-4'>
                    <div className='cont-data-vista-2'>
                        {/* servicios */}
                        <div className='cont-servicios'>
                            <p className='titulo-servicio'>Servicios</p>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Luz eléctrica</label>
                                <input type='checkbox' id='luz' value={"luz"}  onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Gas</label>
                                <input type='checkbox' id='gas' value={"gas"}  onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                            </div>
                            <div className='cont-amb'>
                                <label className='label-crea-prop'>Cloaca</label>
                                <input type='checkbox' id='luz' value={"cloaca"}  onChange={(e) => { handleOnChangeServicios(e) }} className='check-luz' />
                            </div>
                        </div>

                        {/* carga de img */}
                        <div className="img-cloudinary">
                            <div style={{ 'display': 'flex', 'justifyContent': 'start', 'alignItems': 'center' }}>
                                <label className='label-crea-prop'>Imágenes</label>
                                <p style={{ 'margin': '0', 'color': 'red', 'fontSize': '23px' }}>*</p>
                            </div>
                            <input type="file" accept="image/*" multiple onChange={(e)=> {handleOnChangeImgs(e)}}/>
                        </div>
                        {/* muestra ims miniatura */}
                        <div className="image-preview">
                            {
                                vistaPrevia.map((img, index) => (
                                    <div key={index} className='cont-img-miniatura'>
                                        <img src={img.url} alt={`preview-${index}`} className='img-miniatura'/>
                                        <button 
                                            className='btn-elimina-img'
                                            onClick={()=>{handleOnClickEliminaImg(index)}}
                                        >
                                            X
                                        </button>
                                    </div>
                                ))
                            }
                        </div>

                        {/* carga video */}
                        <div className="video-cloudinary">
                            <label className='label-crea-prop'>Video</label>
                            <input type="file" accept="video/*" onChange={(e)=>{handleOnChangeVideos(e)}} />
                        </div>
                        {/* muestra video */}
                        <div className="video-preview">
                            {
                                vistaPreviaVideo && (
                                    <video src={vistaPreviaVideo} /* controls */ className='video-miniatura'></video>
                                )
                            }
                            
                        </div>

                        {/* btns Sgt-Atras */}
                        <div className='cont-campReq-botones'>
                            <div className='cont-campo-requerido'>
                                <p>Campo requerido</p>
                                <p style={{ 'color': 'red', 'marginLeft': '3px' }}>*</p>
                            </div>
                            <div className='cont-botones-sgt-atras-vista-2'>
                                <button 
                                    type='button' 
                                    className='btn-atras-vista-2' 
                                    onClick={()=>onClickAtrasVista4()}
                                >
                                    Atrás
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* btns crea */}
                <div 
                    className={
                        validaDatosVista1() && 
                        validaDatosVista2() && 
                        validaDatosVista3() &&
                        validaDatosVista4()
                        ? 'cont-botones-crea-prop' 
                        : 'cont-botones-crea-prop-Disable'
                    }
                >
                    <button type='submit' className='btn-crea'>
                        {
                            tipoOperacion === 'creacion' ? 'Crear propiedad' : 'Editar propiedad'
                        }
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormularioProp;

/*



*/