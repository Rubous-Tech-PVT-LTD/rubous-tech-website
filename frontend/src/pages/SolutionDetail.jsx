import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommunicationSection from '../components/SolutionDetail/CommunicationSection'
import IntelligentCapabilities from '../components/SolutionDetail/IntelligentCapabilities'
import ThreeSteps from '../components/SolutionDetail/Steps'
import QuantifiableResults from '../components/SolutionDetail/Results'
import BuiltForEveryScenario from '../components/SolutionDetail/Scenario'
import CommonQuestions from '../components/SolutionDetail/CommonQuestion'
import CTASection from '../components/SolutionDetail/CTASection'
import Hero from '../components/SolutionDetail/hero'


const SolutionDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [serviceDetail, setServiceDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/services/${id}`);
        const responseJson = await response.json();

        if (!response.ok || !responseJson.success) {
          throw new Error(responseJson.message || 'Unable to load service details');
        }

        setService(responseJson.data);
        setServiceDetail(responseJson.data.serviceDetail || null);
      } catch (fetchError) {
        setError(fetchError.message);
        setService(null);
        setServiceDetail(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f8f9ff] flex items-center justify-center px-6">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="min-h-screen bg-[#f8f9ff] px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">Service not found</h1>
          <p className="text-gray-500">{error || 'This service page is no longer available.'}</p>
        </div>
      </div>
    );
  }

    return (
        <>
      <Hero service={service} serviceDetail={serviceDetail} />
      <CommunicationSection service={service} serviceDetail={serviceDetail} />
      <IntelligentCapabilities serviceDetail={serviceDetail} />
      <ThreeSteps serviceDetail={serviceDetail} />
      <QuantifiableResults serviceDetail={serviceDetail} />
      <BuiltForEveryScenario serviceDetail={serviceDetail} />
          <CommonQuestions serviceDetail={serviceDetail} />
          <CTASection serviceDetail={serviceDetail} />
        </>
    )
}

export default SolutionDetail
