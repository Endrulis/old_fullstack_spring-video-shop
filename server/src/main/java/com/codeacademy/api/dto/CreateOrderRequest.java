package com.codeacademy.api.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

    @Data
    @NoArgsConstructor
    public class CreateOrderRequest {
        @NotBlank
        private String description;

        public CreateOrderRequest(String description) {

        }
    }
