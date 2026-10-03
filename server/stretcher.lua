RegisterNetEvent('codera-radialmenu:server:RemoveStretcher', function(pos, stretcherObject)
    TriggerClientEvent('codera-radialmenu:client:RemoveStretcherFromArea', -1, pos, stretcherObject)
end)

RegisterNetEvent('codera-radialmenu:Stretcher:BusyCheck', function(id, type)
    TriggerClientEvent('codera-radialmenu:Stretcher:client:BusyCheck', id, source, type)
end)

RegisterNetEvent('codera-radialmenu:server:BusyResult', function(isBusy, otherId, type)
    TriggerClientEvent('codera-radialmenu:client:Result', otherId, isBusy, type)
end)