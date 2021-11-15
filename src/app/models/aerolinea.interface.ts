export interface Personas{
    id:string;
    nombre :string;
    apellido:string;
    correo:string;
    direccion:string;
    fecha_nacimiento:Date;
    telefono :string;
    nacionalidad: string;
    genero:string;
}
export interface Aeropuerto{
    id:string;
    nombre :string;
    ciudad:string;
    pais:string;
}
export interface Aviones{
    id:string;
    nombre :string;
    color:string;
    capacidad:string;
    capacidad_business:string;
    capacidad_turista:Date;
    capacidad_plus :string;
    modelo: string;
    anio:string;
    id_marca:string;
    banios:string;
}

export interface Marcas{
    id:string;
    nombre :string;
    compania:string;
}
export interface Reservas{
    id:string;
    id_pasajero :string;
    id_vuelo:string;
    id_tarifa:string;
    asiento:string;
    total:Date;
    subtotal :string;
    iva: string;
}
export interface Tarifas{
    id:string;
    nombre :string;
    descripcion:string;
    precio:number;
}

export interface Cargos{
    id:string;
    nombre :string;
    descripcion:string;
}

export interface Empleados{
    id:string;
    id_persona :string;
    cedula:string;
    username:string;
    password:string;
    id_cargo:Date;
    sueldo :number;
    fecha_contratacion: Date;
}

export interface Vuelos{
    id:string;
    id_piloto :string;
    id_copiloto:string;
    id_aeropuerto_origen:string;
    id_aeropuerto_destino:string;
    id_avion:string;
    fecha_hora_salida: Date;
    fecha_hora_llegada: Date;
    estado:string;
}
export interface Detalle_Vuelo{
    id_vuelo:string;
    id_azafatas :string;
    asiento:string;
}


export interface Consumo{
    id:string;
    id_vuelo :string;
    id_pasajero:string;
    total:string;
    subtotal:string;
    iva: string;
}

export interface Detalle_Consumo{
    id_consumo:string;
    cantidad :string;
    id_producto:string;
}

export interface Producto{
    id:string;
    nombre :string;
    precio:string;
    descripcion:string;
}

export interface Pasajero{
    id:string;
    id_persona :string;
    username:string;
    password:string;
    pasaporte:string;
    id_contacto: string;
}