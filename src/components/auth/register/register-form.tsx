'use client';
import Link from 'next/link';
import Spinner from '../../ui/spinner';
import useGetGenders from '@/hooks/auth/register/useGetGenders';
import useGetMaritalStatus from '@/hooks/auth/register/useGetMaritalStatus';
import usePostEmployee from '@/hooks/auth/register/usePostEmployee';
import useGetJobsPositions from '@/hooks/auth/register/useGetJobPositions';

const RegisterForm = () => {
  const { genders } = useGetGenders();
  const { maritalStatus } = useGetMaritalStatus();
  const { JobsPositions } = useGetJobsPositions();
  const { onSubmit, register, errorMessage, mutation, errors } =
    usePostEmployee();
  5;
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Información Personal */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">
            Información Personal
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="Name"
                className="block text-sm font-medium text-gray-900"
              >
                Nombre
              </label>
              <input
                type="text"
                placeholder="Escribe tu nombre aquí"
                id="Name"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('Name')}
              />
              {errors.Name && (
                <span className="text-red-500 text-sm">
                  {errors.Name.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="Surname1"
                className="block text-sm font-medium text-gray-900"
              >
                Primer Apellido
              </label>
              <input
                type="text"
                placeholder="Escribe tu primer apellido aquí"
                id="Surname1"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('Surname1')}
              />
              {errors.Surname1 && (
                <span className="text-red-500 text-sm">
                  {errors.Surname1.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="Surname2"
                className="block text-sm font-medium text-gray-900"
              >
                Segundo Apellido
              </label>
              <input
                type="text"
                placeholder="Escribe tu segundo apellido aquí"
                id="Surname2"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('Surname2')}
              />
              {errors.Surname2 && (
                <span className="text-red-500 text-sm">
                  {errors.Surname2.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="Birthdate"
                className="block text-sm font-medium text-gray-900"
              >
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                id="Birthdate"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('Birthdate')}
              />
              {errors.Birthdate && (
                <span className="text-red-500 text-sm">
                  {errors.Birthdate.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="GenderId"
                className="block text-sm font-medium text-gray-900"
              >
                Género
              </label>
              <select
                id="GenderId"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('GenderId')}
              >
                <option>Selecciona tu género</option>
                {genders?.map((gender: { id: number; Name: string }) => (
                  <option key={gender.id} value={gender.id}>
                    {gender.Name}
                  </option>
                ))}
              </select>
              {errors.GenderId && (
                <span className="text-red-500 text-sm">
                  {errors.GenderId.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Información Laboral */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">
            Información Laboral
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="EmployeeId"
                className="block text-sm font-medium text-gray-900"
              >
                Identificación
              </label>
              <input
                type="number"
                placeholder="Escribe tu identificación laboral aquí"
                id="id"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('id')}
              />
              {errors.id && (
                <span className="text-red-500 text-sm">
                  {errors.id.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="HiringDate"
                className="block text-sm font-medium text-gray-900"
              >
                Fecha de Contratación
              </label>
              <input
                type="date"
                id="HiringDate"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('HiringDate')}
              />
              {errors.HiringDate && (
                <span className="text-red-500 text-sm">
                  {errors.HiringDate.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="NumberChlidren"
                className="block text-sm font-medium text-gray-900"
              >
                Número de Hijos
              </label>
              <input
                type="number"
                placeholder="Escribe el número de hijos aquí"
                id="NumberChlidren"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('NumberChlidren')}
              />
              {errors.NumberChlidren && (
                <span className="text-red-500 text-sm">
                  {errors.NumberChlidren.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="AvailableVacationDays"
                className="block text-sm font-medium text-gray-900"
              >
                Días de Vacaciones Disponibles
              </label>
              <input
                type="number"
                placeholder="Escribe tus días de vacaciones aquí"
                id="AvailableVacationDays"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('AvailableVacationDays')}
              />
              {errors.AvailableVacationDays && (
                <span className="text-red-500 text-sm">
                  {errors.AvailableVacationDays.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="MaritalStatusId"
                className="block text-sm font-medium text-gray-900"
              >
                Estado Civil
              </label>
              <select
                id="MaritalStatusId"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('MaritalStatusId')}
              >
                <option>Selecciona tu estado civil</option>
                {maritalStatus?.map((status: { id: number; Name: string }) => (
                  <option key={status.id} value={status.id}>
                    {status.Name}
                  </option>
                ))}
              </select>
              {errors.MaritalStatusId && (
                <span className="text-red-500 text-sm">
                  {errors.MaritalStatusId.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="JobPositionId"
                className="block text-sm font-medium text-gray-900"
              >
                Puesto de Trabajo
              </label>
              <select
                id="JobPositionId"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('JobPositionId')}
              >
                <option>Selecciona tu puesto de trabajo</option>
                {JobsPositions?.map((job: { id: number; Name: string }) => (
                  <option key={job.id} value={job.id}>
                    {job.Name}
                  </option>
                ))}
              </select>
              {errors.JobPositionId && (
                <span className="text-red-500 text-sm">
                  {errors.JobPositionId.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-3">
            Información de Contacto
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="Email"
                className="block text-sm font-medium text-gray-900"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="Escribe tu correo electrónico aquí"
                id="Email"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('Email')}
              />
              {errors.Email && (
                <span className="text-red-500 text-sm">
                  {errors.Email.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="CellPhone"
                className="block text-sm font-medium text-gray-900"
              >
                Número de Teléfono
              </label>
              <input
                type="tel"
                placeholder="Escribe tu número de teléfono aquí"
                id="CellPhone"
                className="block w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base"
                {...register('CellPhone')}
              />
              {errors.CellPhone && (
                <span className="text-red-500 text-sm">
                  {errors.CellPhone.message}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
      <div className="flex flex-col items-center">
        <button
          type="submit"
          disabled={mutation.isPending}
          className="px-4 w-28 py-2 mt-4 text-white bg-dodger-blue-600 rounded-md shadow-sm hover:bg-dodger-blue-600 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 transition-all"
        >
          <div className="flex justify-center items-center">
            {mutation.isPending ? <Spinner /> : <span>Registrar</span>}
          </div>
        </button>
        <Link
          href={'/'}
          className="mt-4 text-sm hover:text-dodger-blue-600 hover:underline"
        >
          Volver al Inicio
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
