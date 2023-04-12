package com.codeacademy.api.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UpdateOrderRequest {
    @NotBlank
    private String description;

    public UpdateOrderRequest(String newDescription) {
    }


}
