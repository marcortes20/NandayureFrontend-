'use client';

import InputField from '@/components/ui/input/input-field';
import Spinner from '@/components/ui/spinner';
import { titleFont } from '@/config/fonts';
import { CheckIcon } from 'lucide-react';
import { Checkbox, CheckboxIndicator } from '@radix-ui/react-checkbox';
import usePostVacation from '@/hooks/request-management/request-vacation/usePostVacation';

const VacationRequestForm = () => {
  const {
    onSubmit,
    register,
    mutation,
    isDepartmentApproved,
    isRRHHApproved,
    isMayorApproved,
    setIsDepartmentApproved,
    setIsRRHHApproved,
    setIsMayorApproved,
  } = usePostVacation();

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-3xl mx-auto space-y-6 p-10 bg-white rounded-lg shadow-lg"
    >
      <h5
        className={`${titleFont.className} mb-3 text-base font-semibold text-gray-900 md:text-xl`}
      >
        Solicitud de Vacaciones
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Por favor, introduce los datos requeridos para la solicitud.
      </p>
      <div className="flex mb-6 mt-4">
        <div className="flex-1 h-1 bg-dodger-blue-500"></div>
        <div className="flex-1 h-1 bg-golden-dream-500"></div>
        <div className="flex-1 h-1 bg-apple-500"></div>
      </div>

      {/* Campos del formulario */}
      <InputField
        id="diasSolicitados"
        label="Días Solicitados"
        type="number"
        placeholder="Número de días solicitados"
        register={register}
      />
      <InputField
        id="fechaSalida"
        label="Fecha de salida"
        type="date"
        register={register}
      />
      <InputField
        id="fechaEntrada"
        label="Fecha de entrada"
        type="date"
        register={register}
      />
      <InputField
        id="idSolicitud"
        label="ID de Solicitud"
        type="number"
        placeholder="Escribe el ID de la solicitud"
        register={register}
      />

      {/* Checkboxes para aprobaciones */}
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox
          id="aprobacionDepartamento"
          checked={isDepartmentApproved}
          onCheckedChange={() => setIsDepartmentApproved(!isDepartmentApproved)}
          className="w-6 h-6 bg-white border border-gray-300 rounded-lg"
        >
          <CheckboxIndicator className="flex justify-center items-center">
            <CheckIcon className="w-4 h-4 text-green-600" />
          </CheckboxIndicator>
        </Checkbox>
        <label htmlFor="aprobacionDepartamento">
          Aprobación del Departamento
        </label>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox
          id="aprobacionRRHH"
          checked={isRRHHApproved}
          onCheckedChange={() => setIsRRHHApproved(!isRRHHApproved)}
          className="w-6 h-6 bg-white border border-gray-300 rounded-lg"
        >
          <CheckboxIndicator className="flex justify-center items-center">
            <CheckIcon className="w-4 h-4 text-green-600" />
          </CheckboxIndicator>
        </Checkbox>
        <label htmlFor="aprobacionRRHH">Aprobación de RRHH</label>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <Checkbox
          id="aprobacionAlcalde"
          checked={isMayorApproved}
          onCheckedChange={() => setIsMayorApproved(!isMayorApproved)}
          className="w-6 h-6 bg-white border border-gray-300 rounded-lg"
        >
          <CheckboxIndicator className="flex justify-center items-center">
            <CheckIcon className="w-4 h-4 text-green-600" />
          </CheckboxIndicator>
        </Checkbox>
        <label htmlFor="aprobacionAlcalde">Aprobación del Alcalde</label>
      </div>

      <button
        type="submit"
        className="w-full mt-4 py-2 px-4 bg-dodger-blue-600 hover:bg-dodger-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <div className="flex justify-center items-center">
          {mutation.isPending ? <Spinner /> : <span>Enviar solicitud</span>}
        </div>
      </button>
    </form>
  );
};

export default VacationRequestForm;
