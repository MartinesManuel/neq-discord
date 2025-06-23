import { NextResponse } from 'next/server';
import { getLoanStatus, setLoanStatus } from '@/app/actions/telegram';

/**
 * Maneja solicitudes HTTP GET para obtener el estado de un préstamo.
 * 
 * @param {Request} req - La solicitud HTTP entrante.
 * @returns {Promise<NextResponse>} - Una respuesta JSON con el estado del préstamo o un mensaje de error.
 */
export async function GET(req: Request): Promise<NextResponse> {
  // Extrae los parámetros de búsqueda de la URL de la solicitud.
  const { searchParams } = new URL(req.url);
  const cedula = searchParams.get('cedula');

  // Verifica si el parámetro 'cedula' está presente.
  if (!cedula) {
    // Si 'cedula' no está presente, devuelve una respuesta de error.
    return NextResponse.json(
      { error: 'Cédula is required' },
      { status: 400 }
    );
  }

  // Llama a la función getLoanStatus para obtener el estado del préstamo.
  const status = await getLoanStatus(cedula);
  
  // Devuelve una respuesta JSON con el estado del préstamo.
  return NextResponse.json({ status });
}

/**
 * Maneja solicitudes HTTP POST para actualizar el estado de un préstamo.
 * 
 * @param {Request} req - La solicitud HTTP entrante.
 * @returns {Promise<NextResponse>} - Una respuesta JSON con el resultado de la operación o un mensaje de error.
 */
export async function POST(req: Request): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const cedula = searchParams.get('cedula');
  const status = searchParams.get('status');

  // Verifica si los parámetros 'cedula' y 'status' están presentes.
  if (!cedula || !status) {
    // Si alguno de los parámetros no está presente, devuelve una respuesta de error.
    return NextResponse.json(
      { error: 'Cédula and status are required' },
      { status: 400 }
    );
  }

  // Llama a la función setLoanStatus para actualizar el estado del préstamo.
  await setLoanStatus(cedula, status);
  
  // Devuelve una respuesta JSON indicando que la operación fue exitosa.
  return NextResponse.json({ success: true });
}
